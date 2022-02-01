import HomeIcon from "@assets/svg/Home";
import Home from "./home";

const routes = [
  {
    name: "Dashboard",
    path: "/home",
    svg: <HomeIcon />,
    component: <Home />,
  },
  {
    name: "About",
    path: "/about-us",
    component: <div> Jesus </div>,
  },
];

export default routes;
