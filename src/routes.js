import { Person, Dashboard, Article, Home } from "@mui/icons-material";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: () => <Home />,
    sidebar: true,
    isHybrid: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: () => <Dashboard />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/landing",
    name: "Dashboard",
    icon: () => <Dashboard />,
    sidebar: true,
    isHybrid: true,
  },
  {
    path: "/event",
    name: "Dashboard",
    icon: () => <Dashboard />,
    sidebar: true,
    isHybrid: true,
  },
  {
    path: "/users",
    name: "Users",
    icon: () => <Person />,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/users/[id]",
    name: "About",
    isPrivate: true,
  },
  {
    path: "/about-us",
    name: "About",
    icon: () => <Article />,
    sidebar: true,
    isHybrid: true,
  },
  {
    path: "/auth/login",
    name: "Login",
    isPublic: true,
  },
  {
    path: "/[pageHref]",
    name: "Static Page",
    isHybrid: true,
  },
];

export const Public_Routes = routes
  .filter((item) => item.isPublic)
  .map((item) => item.path);
export const Private_Routes = routes
  .filter((item) => item.isPrivate)
  .map((item) => item.path);
export const Hybrid_Routes = routes
  .filter((item) => item.isHybrid)
  .map((item) => item.path);
export const Access_Route = "/landing";
export const Login_Route = "/auth/login";
