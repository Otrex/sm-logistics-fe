import HomeIcon from "@assets/svg/Home";
import Time from "@assets/svg/Time";
import Home from "./Home";
import History from "./History";
import Wallet from "@assets/svg/Wallet";
import Envelop from "@assets/svg/Envelop";
import SettingsIcon from "@assets/svg/Settings";
import LogoutIcon from "@assets/svg/Logout";
import ExpressPickUp from "./ExpressPickUp";
import TrackDelivery from "./TrackDelivery";
import SchedulePickUp from "./SchedulePickUp";

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

export const otherRoutes = [
  {
    name: "Express PickUp",
    path: "/express-pickup",
    component: <ExpressPickUp />,
  },
  {
    name: "Schedule PickUp",
    path: "/schedule-pickup",
    component: <SchedulePickUp />,
  },
  {
    name: "Track Delivery",
    path: "/track-delivery",
    component: <TrackDelivery />,
  },
  {
    name: "View Details",
    path: "/view-details/:id",
    component: <div> Jesus </div>,
  },
];

export default routes;
