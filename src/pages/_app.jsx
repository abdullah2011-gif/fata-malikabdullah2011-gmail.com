import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextShield } from "next-shield";
import Head from "next/head";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import "nprogress/nprogress.css";
import { createRef, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "Redux/createStore";
import {
  Access_Route,
  Hybrid_Routes,
  Login_Route,
  Private_Routes,
  Public_Routes,
} from "routes";
import { projectName, snackBarPlacement, theme } from "theme/themeConfig";

// components
import LayoutController from "components/Layouts/LayoutController";
import Spinner from "components/Spinner/Spinner";

// styles
import "styles/footer.scss";
import "styles/globals.scss";
import "styles/header.scss";
import "styles/login.scss";
import "styles/sidebar.scss";
import "styles/landings.scss";
import "styles/event.scss";

// notistack
const notistackRef = createRef();

const closeNotistack = (key) => {
  notistackRef.current.closeSnackbar(key);
};

// react query
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  // state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // router
  const router = useRouter();

  const PerPageLayout = Component.Layout || false; // page has own layout

  // useEffect(() => {
  //   window.addEventListener("login", handleLogin);
  //   window.addEventListener("logout", handleLogout);

  //   return () => {
  //     window.removeEventListener("login", handleLogin);
  //     window.removeEventListener("logout", handleLogout);
  //   };
  // }, []);

  // useEffect(() => {
  //   const status = localStorage.getItem("loggedIn");
  //   if (status === "true") {
  //     handleLogin();
  //   } else {
  //     handleLogout();
  //   }
  // }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("loggedIn", true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  return (
    <>
      <Head>
        <title>{projectName}</title>
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              ref={notistackRef}
              anchorOrigin={snackBarPlacement}
              autoHideDuration={3000}
              variant="success"
              maxSnack={1}
              action={(key) => (
                <>
                  <IconButton size="small" onClick={() => closeNotistack(key)}>
                    <Close sx={{ color: "white" }} />
                  </IconButton>
                </>
              )}
            >
              <LayoutController PerPageLayout={PerPageLayout}>
                <NextShield
                  isAuth={isAuthenticated}
                  isLoading={false}
                  router={router}
                  publicRoutes={Public_Routes}
                  privateRoutes={Private_Routes}
                  hybridRoutes={Hybrid_Routes}
                  accessRoute={Access_Route}
                  loginRoute={Login_Route}
                  LoadingComponent={<Spinner />}
                >
                  <Component {...pageProps} />
                </NextShield>
              </LayoutController>
            </SnackbarProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default App;
