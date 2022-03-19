import LeftCaret from "@assets/svg/LeftCaret";
import NavLabel from "@components/utility/NavLabel";
import {
  H320,
  P12,
  P16,
} from "@pages/landing/components/StyledComponents";
import React from "react";

// Incomplete
export default function NotificationPanel(props: any) {
  return (
    <>
      <div
        className={`w-full bg-white notice-slide md:hidden block z-max ${
          props.show ? "notice-open" : ""
        }`}
      >
        <div className="w-full h-screen px-11 pt-9">
          <NavLabel
            action={props.toggleShow}
            label="Notifications"
            styleType
          />

          <div className="mt-14 left-0 w-full">
            <ul>
              {!props.state?.notifications?.length ? (
                <li className="text-center">No Notifications</li>
              ) : (
                <></>
              )}
              {props.state?.notifications?.map(
                (notice: any, key: number) => (
                  <li key={key}>
                    <div className="relative">
                      <P16>{notice.title}</P16>
                      <P12>{notice.message}</P12>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
