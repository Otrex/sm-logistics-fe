import { mapStateOrActionToProps } from "@app/hoc";
import { PropState } from "types/app.t";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";
import DashboardTrackDeliveryController from "./controller";

const TrackDelivery = ({
  stateMngr: state,
}: PropState<DashboardTrackDeliveryController>) => {
  return (
    <>
      <H2>Track Item</H2>
      <P>Keep track of your item’s status using real-time data.</P>
    </>
  );
};

export default mapStateOrActionToProps({
  StateManager: DashboardTrackDeliveryController,
  Component: TrackDelivery,
});
