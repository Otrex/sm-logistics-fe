import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  fill: string;
}

const Home = ({ fill, stroke, ...props }: ISVGProps) => {
  return (
    <>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.15722 19.7714V16.7047C8.1572 15.9246 
          8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 
          15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 
          20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 
          20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 
          6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 
          1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 
          19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 
          8.13797 19.7714V19.7714"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

Home.defaultProps = {
  fill: "none",
  stroke: "#AEAFCB",
};

export default Home;