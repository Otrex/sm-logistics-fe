import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  stroke: string;
}

const LeftCaret = ({ stroke, ...props }: ISVGProps) => {
  return (
    <>
      <svg
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 15L1.5 8L8.5 1"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

LeftCaret.defaultProps = {
  stroke: "green",
};

export default LeftCaret;
