import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  stroke: string;
}

function WalletAccent({ stroke, ...props }: ISVGProps) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 
        6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 
        15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 
        18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 
        2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 
        5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 
        5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 
        3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 
        3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z"
        fill="#FAB60B"
      />
      <path
        opacity="0.4"
        d="M14.0374 9.29657C14.2465 10.2478 15.0805 10.917 16.0326 
        10.8996H19.2825C19.6787 10.8996 20 10.5715 20 10.166V7.63439C19.9991 
        7.22973 19.6787 6.90077 19.2825 6.8999H15.9561C14.8731 6.90338 13.9983 
        7.80235 14 8.91018C14 9.03985 14.0128 9.16951 14.0374 9.29657Z"
        fill="#FAB60B"
      />
      <circle cx="16" cy="8.8999" r="1" fill="#FAB60B" />
    </svg>
  );
}

WalletAccent.defaultProps = {
  stroke: "#AEAFCB",
};

export default WalletAccent;
