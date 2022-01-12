import React from "react";
import { P12 as P, Width75p } from "./StyledComponents";
import logo from "@assets/img/logo-full-colored.png";
import fb from "@assets/img/fb.png";
import twitter from "@assets/img/twitter.png";
import insta from "@assets/img/insta.png";
import styled from "styled-components";

const UL = styled.ul<any>`
list-style: none;
margin: 0;
padding;

li {
  display: inline-block;
  ${(props) =>
    props.reverse ? "margin-left: 1.6rem" : "margin-right: 1.6rem"};
}

img {
  display: inline-block !important;
}
`;

export default function Footer() {
  return (
    <div className="cb-E5E5E5-25 pt-5_2 pb-5_8">
      <Width75p>
        <div className="flex flex-row mb-12 items-center">
          <div className="f1 w-full">
            <img src={logo} alt="logo" />
          </div>
          <div className="f1 w-full text-right">
            <div className="inline-block mr-9">
              <img src={fb} alt="fb" />
            </div>
            <div className="inline-block mr-9">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="inline-block">
              <img src={insta} alt="insta" />
            </div>
          </div>
        </div>
        <div className="flex flex-row b-t-1px-F2F2F2 pt-12">
          <div className="w-full">
            <UL>
              <li>
                <P>Terms of Use</P>
              </li>
              <li>
                <P>Privacy Policy</P>
              </li>
              <li>
                <P>F.A.Q.</P>
              </li>
              <li>
                <P>Support</P>
              </li>
            </UL>
          </div>
          <div className="w-full text-right ">
            <P>©2021 Harmony Technology. All Rights Reserved.</P>
          </div>
        </div>
      </Width75p>
    </div>
  );
}
