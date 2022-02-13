import React from "react";
import Footer from "../components/Footer";
import { TopNav } from "../components/Nav";
import {
  H152,
  H232,
  P16,
  Width75p,
} from "../components/StyledComponents";

export default function Terms() {
  return (
    <>
      <TopNav active={10} className="pb-48" />
      <Width75p className="pb-44">
        <div className="text-center">
          <H152 style={{ color: "#03045E" }}>Terms of Use</H152>
          <P16 className="px-80 pb-40">
            Last Updated: 12 November, 2021
          </P16>
        </div>
        <P16>
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel
          etiam suspendisse morbi eleifend faucibus eget vestibulum
          felis. Dictum quis montes, sit sit. Tellus aliquam enim
          urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi,
          tellus tincidunt. At feugiat sapien varius id
        </P16>
        <H232 className="pt-20 pb-6">
          What information do we collect?
        </H232>
        <P16 className="text-justify">
          Dolor enim eu tortor urna sed duis nulla. Aliquam
          vestibulum, nulla odio nisl vitae. In aliquet pellentesque
          aenean hac vestibulum turpis mi bibendum diam. Tempor
          integer aliquam in vitae malesuada fringilla. Elit nisi in
          eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo
          consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. <br />
          <br />
          Viverra purus et erat auctor aliquam. Risus, volutpat
          vulputate posuere purus sit congue convallis aliquet. Arcu
          id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor
          lacus, eget nunc lectus in tellus, pharetra, porttitor.
          <br />
          <br />
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
          enim mauris id. Non pellentesque congue eget consectetur
          turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
          tincidunt aenean tempus. Quis velit eget ut tortor tellus.
          Sed vel, congue felis elit erat nam nibh orci.
        </P16>
        <H232 className="pt-20 pb-6">
          What information do we collect?
        </H232>
        <P16 className="text-justify">
          Dolor enim eu tortor urna sed duis nulla. Aliquam
          vestibulum, nulla odio nisl vitae. In aliquet pellentesque
          aenean hac vestibulum turpis mi bibendum diam. Tempor
          integer aliquam in vitae malesuada fringilla. Elit nisi in
          eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo
          consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. <br />
          <br />
          Viverra purus et erat auctor aliquam. Risus, volutpat
          vulputate posuere purus sit congue convallis aliquet. Arcu
          id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor
          lacus, eget nunc lectus in tellus, pharetra, porttitor.
          <br />
          <br />
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
          enim mauris id. Non pellentesque congue eget consectetur
          turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
          tincidunt aenean tempus. Quis velit eget ut tortor tellus.
          Sed vel, congue felis elit erat nam nibh orci.
        </P16>
      </Width75p>
      <Footer />
    </>
  );
}
