import React from "react";

interface ILayOut {
  children: any[];
  className?: string;
  gap?: number;
  shorten?: boolean;
  gapShorten?: number;
  hide?: number;
}

export default function Lay303030({
  children,
  className,
  gap,
  shorten,
  gapShorten,
  hide,
}: ILayOut) {
  const gapSize = gap || 7;
  const gapSh = gapShorten || gapSize;
  return (
    <>
      <div
        className={`flex ${
          shorten ? "flex-row" : "flex-wrap"
        } md:-mx-${gapSize} -mx-${gapSh} mb-9 ${className}`}
      >
        {children.map((child, idx) => (
          <div
            key={idx}
            className={`md:w-${12 / children.length}/12 ${
              shorten ? "w-1/2" : "w-full"
            } md:px-${gapSize} px-${gapSh} ${
              hide && idx + 1 === hide ? "hidden md:block" : ""
            }`}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
}
