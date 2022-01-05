import React from "react";

export default function LayAutoFullAuto(props: any) {
  const { children } = props;
  return (
    <div className="flex flex-row">
      <div> {children[0]} </div>
      <div className="w-full"> {children[1]} </div>
      <div> {children[2]} </div>
    </div>
  );
}
