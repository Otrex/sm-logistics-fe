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
import Modal from "@ui-kit/Modal";
import Payment from "@pages/client/components/modals/Payment";
import RequestRecieved from "@pages/client/components/modals/RequestRecieved";
import GetRider from "@pages/client/components/modals/GetRider";

type ExpressPickupState = PropState<DashboardExpressPickUpController>;
const ExpressPickUp = ({ stateMngr: state }: ExpressPickupState) => {
  return (
    <>
      <Modal
        show={state.showModal.payment}
        toggleShow={state.togglePaymentModal}
      >
        <Payment stateMngr={state} />
      </Modal>
      <Modal
        show={state.showModal.confirm}
        toggleShow={state.toggleConfirmModal}
      >
        <RequestRecieved stateMngr={state} />
      </Modal>
      <Modal
        show={state.showModal.riderInfo}
        toggleShow={state.toggleRiderInfoModal}
      >
        <GetRider stateMngr={state} />
      </Modal>

      <Lay7030>
        <div className="w-full">
          <div className="md:block hidden">
            <H2>Express Pickup</H2>
            <P>
              Request an immdiate dispatch and fast track item
              drop-off.
            </P>
          </div>
          <NavLabel action={state.cancel} label="Express Pickup" />
          <Tab
            className="md:mt-9 mt-0"
            currentTab={state.currentTab}
            trail
          >
            {AddItem(state)}
            {AddDestination(state)}
            {ConfirmPickUp(state)}
          </Tab>
        </div>
        <div>&nbsp;</div>
      </Lay7030>
    </>
  );
};

export default mapStateOrActionToProps({
  StateManager: DashboardExpressPickUpController,
  Component: ExpressPickUp,
});
