import { mapStateOrActionToProps } from "@app/hoc";
import { PropState } from "types/app.t";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";
import DashboardSchedulePickUpController from "./controller";

const SchedulePickUp = ({
  stateMngr: state,
}: PropState<DashboardSchedulePickUpController>) => {
  return (
    <>
      <H2>Schedule Pickup</H2>
      <P>Schedule a pickup for future logistics needs.</P>
    </>
  );
};

export default mapStateOrActionToProps({
  StateManager: DashboardSchedulePickUpController,
  Component: SchedulePickUp,
});
