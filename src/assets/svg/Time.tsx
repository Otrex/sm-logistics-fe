import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  stroke: string;
}

const Time = ({ stroke, ...props }: ISVGProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.25 10.0005C19.25 15.1095 15.109 
      19.2505 10 19.2505C4.891 19.2505 0.75 15.1095 0.75 10.0005C0.75 4.89149 4.891 0.750488 
      10 0.750488C15.109 0.750488 19.25 4.89149 19.25 10.0005Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4316 12.9429L9.66162 10.6939V5.84692"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Time.defaultProps = {
  stroke: "#AEAFCB",
};

export default Time;
