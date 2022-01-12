import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  fill: string;
}

const Search = ({ fill, ...props }: ISVGProps) => {
  return (
    <><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="14.1321" cy="14.2043" rx="11.4656" ry="11.5377" fill={fill}/>
    <path opacity="0.4" d="M27.566 29.2737C27.1207 29.2593 26.6971 29.076 26.3803 28.7606L23.6651 25.5869C23.083 25.0545 23.0354 24.1498 23.5584 23.5585C23.8032 23.3108 24.1361 23.1715 24.4832 23.1715C24.8304 23.1715 25.1633 23.3108 25.4081 23.5585L28.8229 26.2908C29.3148 26.7943 29.4665 27.5417 29.2104 28.199C28.9542 28.8562 28.338 29.3006 27.6372 29.3333L27.566 29.2737Z" fill={fill}/>
    </svg>
    
    </>
  );
};

Search.defaultProps = {
  fill: "#03045E",
};

export default Search;
