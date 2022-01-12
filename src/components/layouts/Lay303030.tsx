import React from "react";

interface ILayOut {
  children: any[];
  className?: string;
  gap?: number
}

export default function Lay303030({ children, className, gap }: ILayOut) {
  const gapSize = gap || 7;
  return (
    <>
      <div className={`flex flex-wrap -mx-${gapSize} mb-9 ${className}`}>
        {children.map((child, idx) => (
          <div
            key={idx}
            className={` w-full md:w-${12 / children.length}/12 px-${gapSize}`}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}
