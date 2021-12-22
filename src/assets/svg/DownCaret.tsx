import React from 'react';

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  stroke: string;
}

const DownCaret = ({ stroke, ...props }: ISVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DownCaret.defaultProps = {
  stroke: 'black',
};

export default DownCaret;
