import { mapStateOrActionToProps } from "@app/hoc";
import { PropState } from "types/app.t";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";
import DashboardExpressPickUpController from "./controller";
import Lay7030 from "@components/layouts/Lay7030";
import Tab from "@ui-kit/Tab";
import NavLabel from "@components/utility/NavLabel";
import AddItem from "./addItems";
import AddDestination from "./addDestination";
import ConfirmPickUp from "./confirmPickup";

const ExpressPickUp = ({
  stateMngr: state,
}: PropState<DashboardExpressPickUpController>) => {
  return (
    <Lay7030>
      <div className="w-full">
        <div className="md:block hidden">
          <H2>Express Pickup</H2>
          <P>
            Request an immdiate dispatch and fast track item drop-off.
          </P>
        </div>
        <NavLabel action={state.cancel} label="Express Pickup" />
        <Tab
          className="md:mt-9 mt-0"
          trail
          currentTab={state.currentTab}
        >
          {AddItem(state)}
          {AddDestination(state)}
          {ConfirmPickUp(state)}
        </Tab>
      </div>
      <div>&nbsp;</div>
    </Lay7030>
  );
};

export default mapStateOrActionToProps({
  StateManager: DashboardExpressPickUpController,
  Component: ExpressPickUp,
});
