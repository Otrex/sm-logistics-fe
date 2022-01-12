import Calling from "@assets/svg/Calling";
import EmailDark from "@assets/svg/EmailDark";
import Search from "@assets/svg/Search";
import Lay303030 from "@components/layouts/Lay303030";
import { IconRounded } from "@ui-kit/ComponentTags";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { TopNav } from "../components/Nav";
import {
  H152,
  H320,
  P14,
  P16,
  Width75p,
} from "../components/StyledComponents";

const CardWrapper = styled.div`
background: #FAFAFA;
border-radius: 24px;
`;
const Card = ({ logo, header, content }: any) => {
  return <>
    <CardWrapper className="text-center p-12">
      <div className="flex justify-center pb-12"><IconRounded dim>{logo}</IconRounded></div>
      <H320>{header}</H320>
      <P14 className="px-9 pt-4 pb-20">{content}</P14>
    </CardWrapper>
  </>
}
export default function Support() {
  return (
    <>
      <TopNav active={10} className="pb-48" />
      <Width75p className="pb-44">
        <div className="text-center">
          <H152 style={{ color: "#03045E" }}>Support</H152>
          <P16 className="px-80 pb-40">
          Need help? Reach us via any of the channels below.
          </P16>
        </div>
        <Lay303030>
          <Card logo={<EmailDark />} header="Shoot a Mail" content="Send us an email and we’ll respond swiftly." />
          <Card logo={<Calling />} header="Talk to Us" content="Feel free to call us or drop a message when needed." />
          <Card logo={<Search />} header="Self Help Desk" content="Get quick answers through our FAQ page." />
        </Lay303030>
      </Width75p>
      <Footer />
    </>
  );
}
