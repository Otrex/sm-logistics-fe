import React from "react";

interface ILayOut {
  children: any[];
}

export default function Lay303030({ children }: ILayOut) {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-9">
        {children.map((child, idx) => (
          <div
            key={idx}
            className={` w-full md:w-${12 / children.length}/12 px-4`}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}
