import { AccentButton } from "@ui-kit/ComponentTags";
import React from "react";
import AvailableOn from "../components/AvailableOn";
import Footer from "../components/Footer";
import { TopNav } from "../components/Nav";
import OurServices from "../components/OurService";
import RideWithUs from "../components/RideWithUs";
import sm from "@assets/img/SMLogistics1.png";
import metor from "@assets/img/metor.png";
import vroom from "@assets/img/vroom.png";
import sfx from "@assets/img/sfx.png";
import express from "@assets/img/express.png";
import {
  Width75p,
  H152,
  P16,
  H148,
  H240,
} from "../components/StyledComponents";

const Header = () => (
  <>
    <Width75p className="flex flex-row items-center pb-44">
      <div className="w-8/12">
        <H152 style={{ color: "#03045E" }}>
          Best Drivers.
          <img
            src={metor}
            alt="sfx"
            className="inline align-text-top"
          />{" "}
          Effective Tracking. Super-Fast Deliveries.
        </H152>
        <P16 className="mb-12">
          Enjoy Super-Fast Delivery with Optimal Quality, all for a
          great price!
        </P16>
        <div>
          <AccentButton
            style={{ width: "auto", display: "inline-block" }}
          >
            Request a Dispatch RIder
          </AccentButton>
          <img src={vroom} alt="sfx" className="inline ml-4" />
        </div>
      </div>
      <div className="w-2/3 relative">
        <img src={sm} alt="sm-logistics" />
        <img
          src={sfx}
          alt="sfx"
          className="inline absolute -right-4 top-24"
        />
        <img
          src={sfx}
          alt="sfx"
          className="inline absolute bottom-6 left-24"
        />
      </div>
    </Width75p>
  </>
);

const Section1 = () => (
  <>
    <Width75p className="text-center pt-20 pb-14">
      <H148>Everything You Need from a Dispatch Service.</H148>
      <P16 className="px-56">
        We are all about convinience. Thus, we offer a string of
        services designed to meet your needs whenever you want it.
      </P16>
    </Width75p>
  </>
);

const Section2 = () => (
  <>
    <Width75p className="pt-14 pb-20">
      <div className="flex flex-row items-center">
        <div className="w-1/2">
          <img src={express} alt="express" />
        </div>
        <div className="w-1/2 pl-20">
          <H240>Immediate Pickup? No Problem.</H240>
          <P16 className="mb-12">
            Our network of dispatch riders are always available to
            help deliver your item right away. Simply select Express
            pick-up and provide details of your delivery request.
          </P16>
          <AccentButton
            style={{ width: "auto" }}
            className="action-btn"
          >
            Request Delivery
          </AccentButton>
        </div>
      </div>
    </Width75p>
  </>
);

const Section3 = () => (
  <>
    <Width75p className="pt-20 pb-48">
      <div className="flex flex-row items-center">
        <div className="w-1/2 pr-28">
          <H240>Immediate Pickup? No Problem.</H240>
          <P16 className="mb-12">
            Our network of dispatch riders are always available to
            help deliver your item right away. Simply select Express
            pick-up and provide details of your delivery request.
          </P16>
          <AccentButton className="action-btn">
            Schedule Delivery
          </AccentButton>
        </div>
        <div className="w-1/2 ">
          <img src={express} alt="express" />
        </div>
      </div>
    </Width75p>
  </>
);

export default function Home() {
  return (
    <div>
      <div className="cb-FFF8EC">
        <TopNav className="mb-20" />
        <Header />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <RideWithUs />
      <OurServices />
      <AvailableOn />
      <Footer />
    </div>
  );
}
