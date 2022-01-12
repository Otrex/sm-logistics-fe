import { AccentButton, IconRounded } from "@ui-kit/ComponentTags";
import React from "react";
import AvailableOn from "../components/AvailableOn";
import Footer from "../components/Footer";
import { TopNav } from "../components/Nav";
import OurServices from "../components/OurService";
import RideWithUs from "../components/RideWithUs";
import info from "@assets/img/info-phone.png";
import express from "@assets/img/express.png";
import {
  Width75p,
  H152,
  P16,
  H148,
  H240,
  H232,
  P14,
} from "../components/StyledComponents";
import ImageGrid from "../components/ImageGrid";
import Lay303030 from "@components/layouts/Lay303030";
import EmailDark from "@assets/svg/EmailDark";
import Chart from "@assets/svg/Chart";
import Copy from "@assets/svg/Copy";
import People from "@assets/svg/People";
import MenuBox from "@assets/svg/MenuBox";
import DownCaret from "@assets/svg/DownCaret";

const Header = () => (
  <>
    <Width75p className="flex flex-col items-center pb-28 pt-28">
      <div className="text-center">
        <H152 style={{ color: "#03045E" }}>Own a Bike? Looking for Extra Income?</H152>
        <P16 className="px-80 mb-12 mt-4">
        We’re  happy to have you at SM Logistics. Come partner with us and grow your income.
        </P16>
        <AccentButton style={{width: "auto", display: "inline-block"}}>Ride with Us!</AccentButton>
      </div>
      <div className="flex justify-center mt-44">
        <IconRounded dim>
          <DownCaret stroke="#03045E" />
        </IconRounded>
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

const OurPeople = () => <>
  <Width75p className="pt-44 pb-20">
  <div className="text-center">
    <H152 style={{ color: "#03045E" }}>Our People</H152>
    <P16 className="px-80">
      We cherish our people and love every moment we share
      together.
    </P16>
  </div>
  <ImageGrid />
  </Width75p>
</>


const Delivering = () => <><Width75p className="pt-44 pb-14">
  <div className="flex flex-row pb-28">
    <div className="w-1/2">
      <H232>We’re dedicated to delivering super-fast dispatch service. You can join us too!</H232>
    </div>
    <div className="w-1/2">
      <P16>At SM Logistics, we are all about convincience and the best quality in service delivery. If you believe you share our goal, we’re very happy to have you on  our team. </P16>
    </div>
  </div>
  <Lay303030>
    <div className="pr-14">
      <IconRounded dim><People /></IconRounded>
      <P16 className="pt-8" bold>Massive Client Pool</P16>
    </div>
    <div className="pr-14">
      <IconRounded dim><Chart /></IconRounded>
      <P16 className="pt-8" bold>Grow your Earning Potential</P16>
    </div>
    <div className="pr-14">
      <IconRounded dim><EmailDark /></IconRounded>
      <P16 className="pt-8" bold>Reliable Support</P16>
    </div>
  </Lay303030>
  <Lay303030 className="mt-24">
    <div>
      <IconRounded dim><Copy /></IconRounded>
      <P16 className="pt-8" bold>Operate with a Registered Brand</P16>
    </div>
    <div>
      <IconRounded dim><MenuBox /></IconRounded>
      <P16 className="pt-8" bold>Web & Mobile Enabled Platform</P16>
    </div>
    <div>
    </div>
  </Lay303030>
</Width75p></>

export default function Partner() {
  return (
    <div>
      <div className="cb-FFF8EC">
        <TopNav className="mb-20" active={2}/>
        <Header />
      </div>
      <Delivering />
      <OurPeople />
      <RideWithUs />
      <OurServices />
      <AvailableOn img={info}/>
      <Footer />
    </div>
  );
}
