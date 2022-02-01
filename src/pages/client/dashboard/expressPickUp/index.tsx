import { mapStateOrActionToProps } from "@app/hoc";
import { PropState } from "types/app.t";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";
import DashboardExpressPickUpController from "./controller";

const ExpressPickUp = ({
  stateMngr: state,
}: PropState<DashboardExpressPickUpController>) => {
  return (
    <>
      <H2>Express Pickup</H2>
      <P>
        Request an immdiate dispatch and fast track item drop-off.
      </P>
    </>
  );
};

export default mapStateOrActionToProps({
  StateManager: DashboardExpressPickUpController,
  Component: ExpressPickUp,
});
