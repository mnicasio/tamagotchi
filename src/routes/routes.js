import Create from "../pages/Create";
import Manage from "../pages/Manage";
import Home from "../pages/Home";
import FourOhFour from "../pages/404";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    exact: true,
    name: "Create",
    component: Create,
  },
  {
    path: "/manage",
    exact: true,
    name: "Manage",
    component: Manage,
  },
  {
    path: "*",
    exact: true,
    name: "404",
    component: FourOhFour,
  },
];

export default routes;
