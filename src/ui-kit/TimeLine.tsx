import React from "react";
import styled from "styled-components";

const Ball = styled.div.attrs((props: any) => {
  return { ...props };
})`
  background: ${(props) => props.color || "blue"};
  width: ${(props) => props.dim};
  height: ${(props) => props.dim};
  border-radius: 50%;
`;

const UL = styled.ul.attrs((props: any) => ({ ...props }))`
  li {
    position: relative;
  }
  li::after,
  li::before {
    z-index: -1;
    left: calc(${(props) => props.dim} / 2);
    content: " ";
    display: block;
    position: absolute;
    border-left: 3px dotted grey;

    width: 10px;
  }
  li::after {
    height: 90%;
    top: 10%;
  }
  li::before {
    height: 10%;
    top: 0;
  }
  li:first-child::before,
  li:last-child::after {
    display: none;
  }
`;

export default function TimeLine(props: any) {
  const { children, dim } = props;

  return (
    <div>
      <UL dim={dim}>
        {Array.isArray(children) ? (
          children.map((child: any, idx: number) => (
            <li key={idx} className="flex flex-row">
              <Ball dim={dim} color={child.props.color} /> {child}
            </li>
          ))
        ) : (
          <li className="flex flex-row">
            <Ball dim={dim} color={children.props.color} /> {children}
          </li>
        )}
      </UL>
    </div>
  );
}

TimeLine.defaultProps = {
  dim: "30px",
};
