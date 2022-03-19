import React from "react";

export default function Lay7030(props: any) {
  return (
    <>
      <div className="flex overflow-hidden  w-full flex-row overflow-y-auto">
        <div className="flex w-full">{props.children[0]}</div>
        <div className="hidden md:flex flex w-5/12 ">
          {props.children[1]}
        </div>
      </div>
    </>
  );
}
