import DashboardExpressPickUpController from "@pages/client/dashboard/ExpressPickUp/controller";
import { PropState } from "types/app.t";
import { AccentButton, Button } from "@ui-kit/ComponentTags";
import { ModalContent } from "@ui-kit/Modal";
import { Wrapper } from "@components/layouts/SideWapper";
import { H2, P } from "@ui-kit/TextTags";
import ship from "@assets/img/ship.png";
import React from "react";
import styled from "styled-components";

// const Wrapper = styled.div`
// background: #03045E;
// border-radius: 24px;
// `;

export default function RequestRecieved({
  stateMngr: state,
}: PropState<DashboardExpressPickUpController>) {
  return (
    <ModalContent
      width="40rem"
      className="rounded24 w-full md:w-auto"
    >
      <Wrapper
        heightCss="auto"
        className="c-white text-center"
        topCss="115%"
      >
        <div className="p-12 welcome-message bg-green-1">
          <div className="flex justify-center py-9">
            <img src={ship} alt="shipped" />
          </div>
          <H2 className="mb-9 c-white">Request Received!</H2>
          <P className="mb-12 mt-4">
            Your drop-off request has been received. You’ll get a
            dispatch rider shortly.
          </P>

          <P className="mb-12 mt-4 mb-24">
            Tracking ID: <b>23345-DD</b>
          </P>
        </div>
      </Wrapper>
    </ModalContent>
  );
}
