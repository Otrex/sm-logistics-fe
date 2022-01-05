import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  fill: string;
}

const Check = ({ fill, ...props }: ISVGProps) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        style={{ stroke: "green !important" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#00d373"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

Check.defaultProps = {
  fill: "#008148",
};

export default Check;
