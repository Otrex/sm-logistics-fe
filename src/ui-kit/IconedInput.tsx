import { InputProps } from "types/ui-kit";
import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div<{ left?: boolean }>`
  position: relative;
  & span {
    position: absolute;
    top: 0;
    padding: ${(props) => props.theme.sizes.input.padding};
    ${(props) => (props.left ? "left: 0" : "right: 0")};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: auto;
    height: ${(props) => props.theme.sizes.input.height};
  }
`;

export default function IconedInput({
  icon,
  ...props
}: InputProps & { icon: any }) {
  return (
    <>
      <Wrapper>
        <Input {...props}></Input>
        <span>{icon}</span>
      </Wrapper>
    </>
  );
}
