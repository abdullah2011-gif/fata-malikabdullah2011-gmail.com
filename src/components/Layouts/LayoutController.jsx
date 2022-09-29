import { useEffect } from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { DrawerWidth } from "theme/themeConfig";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { useReduxUser } from "utils/hooks";
import { userLogin } from "Redux/Actions";

// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorFallbackUI from "../ErrorFallback/ErrorFallback";

NProgress.configure({ showSpinner: false });

const LayoutController = ({ children, PerPageLayout }) => {
  // router
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const userRedux = useReduxUser();

  useEffect(() => {
    rehydrateRedux();

    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleStopLoading);
    return () => {
      router.events.off("routeChangeStart", handleStartLoading);
      router.events.off("routeChangeComplete", handleStopLoading);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const rehydrateRedux = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails && !userRedux) {
      dispatch(userLogin(userDetails));
    }
  };

  const handleStartLoading = () => {
    NProgress.start();
  };

  const handleStopLoading = () => {
    NProgress.done();
  };

  if (PerPageLayout) {
    return (
      <div className="layout-container">
        <Header drawerWidth={DrawerWidth} />
        <main className="main-container">
          <Container maxWidth="lg">
            <PerPageLayout>
              <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
                {children}
              </ErrorBoundary>
            </PerPageLayout>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="layout-container">
      <Header drawerWidth={DrawerWidth} />
      <main className="main-container">
        <Container maxWidth="lg">
          <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
            {children}
          </ErrorBoundary>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutController;
