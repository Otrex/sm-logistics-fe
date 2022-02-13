import LeftCaret from "@assets/svg/LeftCaret";
import UserShortDetails from "@components/panels/UserShortDetails";
import React from "react";
import { useHistory } from "react-router-dom";

type PanelProps = {
  showBackBtn?: boolean;
  userDetails?: { name: string; userThumbnail: string };
};
export default function HeaderPanel({
  showBackBtn,
  userDetails,
}: PanelProps) {
  const history = useHistory();
  return (
    <div className="md:flex flex-row hidden items-center py-5 pr-28 justify-between w-full">
      <div
        className="flex flex-row pl-8 items-center"
        onClick={history.goBack}
      >
        <span className="p-8">
          <LeftCaret />
        </span>
        Go Back
      </div>
      <div>
        <UserShortDetails
          name={userDetails?.name}
          userThumbnail={userDetails?.userThumbnail}
        />
      </div>
    </div>
  );
}
