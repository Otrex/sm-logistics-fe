import CalendarYellow from "@assets/svg/CalendarYellow";
import LocationYellow from "@assets/svg/LocationYellow";
import Send from "@assets/svg/Send";
import Lay303030 from "@components/layouts/Lay303030";
import {
  Card,
  IconRounded,
  SearchInput,
} from "@ui-kit/ComponentTags";
import Modal from "@ui-kit/Modal";
import { H2, H3, P } from "@ui-kit/TextTags";
import DashboardHistoryController from "./controller";
import { mapStateOrActionToProps } from "@app/hoc";
import Welcome from "@pages/client/components/modals/Welcome";
import { PropState } from "types/app.t";
import { NavLink } from "react-router-dom";
import NavBtn from "@assets/svg/NavBtn";
import AlertNotice from "@components/utility/AlertNotice";
import NavBarPanelSmall from "@components/panels/NavBarPanelSmall";
import routes from "../routes";

const History = ({
  stateMngr: state,
}: PropState<DashboardHistoryController>) => <>History</>;

export default mapStateOrActionToProps({
  StateManager: DashboardHistoryController,
  Component: History,
});
