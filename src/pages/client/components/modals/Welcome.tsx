import { Wrapper } from "@components/layouts/SideWapper";
import DashboardHomeController from "@pages/client/dashboard/Home/controller";
import { PropState } from "types/app.t";
import { AccentButton, Button } from "@ui-kit/ComponentTags";
import { ModalContent } from "@ui-kit/Modal";
import { H2, P } from "@ui-kit/TextTags";
import confetti from "@assets/img/confetti.png";
import React from "react";

export default function Welcome({
  stateMngr: state,
}: PropState<DashboardHomeController>) {
  return (
    <ModalContent
      width="47.4rem"
      className="rounded-2xl w-full md:w-auto"
    >
      <Wrapper
        bgSize="100%"
        heightCss="11rem"
        topCss="-250%"
        padding="inherit"
      ></Wrapper>
      <div className="p-12 welcome-message">
        <H2>
          Welcome to SM Logistics{" "}
          <img
            src={confetti}
            className="align-top inline-block"
            alt="confetti"
          />
        </H2>
        <P className="mb-12 mt-4">
          Hi there, we’re happy to have you here. The SM Logisitics
          app is designed to help you simplify your logistics needs.
        </P>
        <P className="mb-12">
          We have prepared a simple explainer video to help you
          understand how to setup your first delivery request.
        </P>
        <P>Looking forward to your requests. Cheers!</P>
      </div>
      <div className="px-9 pb-9 mb-9">
        <div className="flex flex-row">
          <AccentButton className="w-p-45">Watch Now</AccentButton>
          <Button className="w-p-45" onClick={state.closeModal}>
            I’ll Watch Later
          </Button>
        </div>
      </div>
    </ModalContent>
  );
}
