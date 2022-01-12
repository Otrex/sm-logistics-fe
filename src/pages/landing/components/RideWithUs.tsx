import React from "react";
import carry from "@assets/img/carry.png";
import { Width75p, H140, P16 } from "./StyledComponents";
import { AccentButton } from "@ui-kit/ComponentTags";

export default function RideWithUs() {
  return (
    <div className="cb-03045E flex flex-row items-center">
      <div className="w-1/2 pl-12p pr-40">
        <H140 className="text-white">Like to Ride with Us?</H140>
        <P16 className="text-white mb-12">
          If you own a bike and would like to increase your earnings,
          we’ll be happy to have you at SM Logistics. Hit the button
          below to get started.
        </P16>
        <AccentButton style={{ width: "auto" }}>
          {" "}
          Ride with Us!{" "}
        </AccentButton>
      </div>
      <div className="w-1/2">
        <img src={carry} alt="carry" className="w-full" />
      </div>
    </div>
  );
}
