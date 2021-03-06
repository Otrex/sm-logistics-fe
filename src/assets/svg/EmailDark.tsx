import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  fill: string;
}

const EmailDark = ({ fill, ...props }: ISVGProps) => {
  return (
    <>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity="0.4"
          d="M27.3332 17.2536C27.3332 20.9736 24.3465 23.9869 20.6265 24.0003H20.6132H7.39984C3.69317 
          24.0003 0.666504 21.0003 0.666504 17.2803V17.2669C0.666504 17.2669 0.674504 11.3656 0.685171 
          8.3976C0.686504 7.84026 1.3265 7.52826 1.7625 7.87493C4.9305 10.3883 10.5958 14.9709 10.6665 
          15.0309C11.6132 15.7896 12.8132 16.2176 14.0398 16.2176C15.2665 16.2176 16.4665 15.7896 17.4132 
          15.0163C17.4838 14.9696 23.0225 10.5243 26.2385 7.9696C26.6758 7.6216 27.3185 7.9336 27.3198 
          8.4896C27.3332 11.4349 27.3332 17.2536 27.3332 17.2536Z"
          fill={fill}
        />
        <path
          d="M26.6347 3.56478C25.48 1.38878 23.208 -0.000549316 20.7067 -0.000549316H7.40001C4.89867 
          -0.000549316 2.62667 1.38878 1.47201 3.56478C1.21334 4.05145 1.33601 4.65812 1.76667 5.00212L11.6667 
          12.9208C12.36 13.4808 13.2 13.7594 14.04 13.7594C14.0453 13.7594 14.0493 13.7594 14.0533 13.7594C14.0573 
          13.7594 14.0627 13.7594 14.0667 13.7594C14.9067 13.7594 15.7467 13.4808 16.44 12.9208L26.34 5.00212C26.7707 
          4.65812 26.8933 4.05145 26.6347 3.56478Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

EmailDark.defaultProps = {
  fill: "#03045E",
};

export default EmailDark;
