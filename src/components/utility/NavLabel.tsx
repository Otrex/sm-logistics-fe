import { H320 } from "@pages/landing/components/StyledComponents";
import React from "react";
import LeftCaret from "@assets/svg/LeftCaret";

export default function NavLabel(props: {
  action: (e: any) => void;
  label: string;
  styleType?: boolean;
}) {
  return (
    <>
      <div
        className={`flex flex-center ${
          props.styleType ? "" : "fixed"
        } w-full z-max items-center md:hidden`}
      >
        <div className="p-9 pl-0 z-max" onClick={props.action}>
          <LeftCaret />
        </div>
        <H320
          className={`text-center w-full ${
            props.styleType ? "-ml-11" : "-ml-24"
          }`}
        >
          {props.label}
        </H320>
      </div>

      {!props.styleType ? (
        <div className="flex flex-center w-full items-center mt-28 md:hidden">
          {" "}
          &nbsp;{" "}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
