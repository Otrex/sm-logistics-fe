import DownCaret from "@assets/svg/DownCaret";
import React from "react";

export default function DropDown(props: {
  label: JSX.Element;
  children: any;
}) {
  const [state, setstate] = React.useState(false);
  const { label, children } = props;
  return (
    <div className="inline-block relative align-middle">
      <div className="absolute right-0 top-1/2 translate-y--50 px-1 z--1">
        <DownCaret />
      </div>
      <div className="pr-12" onClick={() => setstate((e) => !e)}>
        {label}
      </div>
      {state ? <div className="absolute">{children}</div> : <></>}
    </div>
  );
}
