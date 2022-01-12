import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  fill: string;
}

const Calling = ({ fill, ...props }: ISVGProps) => {
  return (
    <><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path opacity="0.4" d="M19.2245 7.31992C18.5898 7.20267 18.0069 7.60772 17.886 8.2273C17.7652 8.84687 18.1715 9.45179 18.789 9.57304C20.648 9.93546 22.0834 11.3745 22.4473 13.2399V13.2412C22.5508 13.7782 23.0235 14.1686 23.568 14.1686C23.641 14.1686 23.714 14.1619 23.7884 14.1486C24.4059 14.0247 24.8122 13.4211 24.6913 12.8002C24.1483 10.0141 22.0037 7.86221 19.2245 7.31992Z" fill={fill}/>
    <path opacity="0.4" d="M19.1415 2.67724C18.844 2.6346 18.5452 2.72254 18.3076 2.91175C18.0632 3.10361 17.9105 3.38076 17.8773 3.69121C17.807 4.31878 18.2598 4.88639 18.8865 4.95701C23.2087 5.43934 26.5682 8.80637 27.0542 13.1421C27.1193 13.723 27.6066 14.1614 28.1882 14.1614C28.232 14.1614 28.2745 14.1587 28.3184 14.1534C28.6224 14.12 28.8933 13.9695 29.0845 13.7297C29.2744 13.4898 29.3607 13.1914 29.3262 12.8862C28.7207 7.47661 24.5339 3.27816 19.1415 2.67724Z" fill="#03045E"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7088 17.2965C20.0276 22.6138 21.2342 16.4623 24.6207 19.8464C27.8855 23.1103 29.762 23.7643 25.6255 27.8996C25.1074 28.316 21.8153 33.3257 10.246 21.7596C-1.3248 10.192 3.68195 6.89659 4.09846 6.3786C8.24499 2.23179 8.88765 4.11918 12.1525 7.38311C15.539 10.7687 9.39005 11.9792 14.7088 17.2965Z" fill={fill}/>
    </svg>
    </>
  );
};

Calling.defaultProps = {
  fill: "#03045E",
};

export default Calling;
