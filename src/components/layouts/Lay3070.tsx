import React from 'react';

export default function Lay3070(props: any) {
  return (
    <>
      <div className="flex overflow-hidden h-screen w-full flex-row">
        <div className="hidden md:flex flex w-5/12 ">{props.children[0]}</div>
        <div className="flex w-full">{props.children[1]}</div>
      </div>
    </>
  );
}
