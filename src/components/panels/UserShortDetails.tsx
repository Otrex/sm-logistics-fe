import theme from "@app/theme";
import { P } from "@ui-kit/TextTags";
import DropDown from "@ui-kit/DropDown";
import React from "react";
import styled from "styled-components";

const P2 = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.08em;
  text-align: left;
`;

const NameDetails = (name?: string, showMoreInfo?: string) => {
  return (
    <div className="">
      <div>
        <P2>{name || "Damilola Ade..."} </P2>
      </div>
      {showMoreInfo ? (
        <div>
          <P
            className="text-left tagger"
            style={{ color: "#4F4F4F" }}
          >
            {showMoreInfo}
          </P>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default function UserShortDetails(props: {
  userThumbnail?: string;
  name?: string;
  showMoreInfo?: string;
}) {
  const { userThumbnail, name, showMoreInfo } = props;
  return (
    <div className="inline-block">
      <div className="inline-block align-middle mr-8">
        <img
          src={userThumbnail || theme.defaults.userThumbnail}
          alt="user-thumbnail"
        />
      </div>
      <DropDown label={NameDetails(name, showMoreInfo)}>
        <div> Hello World </div>
        <div> {showMoreInfo} </div>
      </DropDown>
    </div>
  );
}
