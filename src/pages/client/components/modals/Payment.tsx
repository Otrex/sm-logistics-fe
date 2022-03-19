import DashboardExpressPickUpController from "@pages/client/dashboard/ExpressPickUp/controller";
import { PropState } from "types/app.t";
import { AccentButton } from "@ui-kit/ComponentTags";
import { ModalContent } from "@ui-kit/Modal";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";
import styled from "styled-components";
import DangerCircle from "@assets/svg/DangerCircle";

const Banner = styled.div`
  background: #bcd6f9;
  border-radius: 12px;
  color: #2f80ed;
`;

export default function Payment({
  stateMngr: state,
}: PropState<DashboardExpressPickUpController>) {
  return (
    <ModalContent
      width="40rem"
      className="rounded-2xl w-full md:w-auto"
    >
      <div className="p-9 welcome-message">
        <H2 className="mb-1">How would you like to Pay?</H2>

        <P className="mb-12">
          Please select your preferred payment opion.
        </P>
      </div>
      <div className="px-9 pb-9 mb-9">
        <div>
          <Banner className="px-10 py-5 mb-20">
            <span>
              {" "}
              <DangerCircle />
            </span>
            <span className="pl-4">
              We won’t charge you until after drop-off.
            </span>
          </Banner>
        </div>
        <AccentButton className="w-full" onClick={state.submitForm}>
          Confirm Request
        </AccentButton>
      </div>
    </ModalContent>
  );
}
