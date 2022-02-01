import HomeIcon from "@assets/svg/Home";
import Time from "@assets/svg/Time";
import Home from "./home";
import History from "./history";
import Wallet from "@assets/svg/Wallet";
import Envelop from "@assets/svg/Envelop";
import SettingsIcon from "@assets/svg/Settings";
import LogoutIcon from "@assets/svg/Logout";

const routes = [
  {
    name: "Dashboard",
    path: "/home",
    svg: <HomeIcon />,
    component: <Home />,
  },
  {
    name: "History",
    path: "/history",
    svg: <Time />,
    component: <History />,
  },
  {
    name: "Payments",
    path: "/payments",
    svg: <Wallet />,
    component: <Home />,
  },
  {
    name: "Support",
    path: "/support",
    svg: <Envelop />,
    component: <Home />,
  },
];

export const settingsRoutes = [
  {
    name: "Settings",
    path: "/about-us",
    svg: <SettingsIcon />,
    component: <div> Jesus </div>,
  },
  {
    name: "Logout",
    path: "/about-us",
    svg: <LogoutIcon />,
    component: <div> Jesus </div>,
  },
];

export default routes;
