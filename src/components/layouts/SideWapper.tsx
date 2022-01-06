import styled from "styled-components";

export const Wrapper = styled.div<{ noBg?: boolean }>`
  background-color: ${(props) =>
    !props.noBg
      ? props.theme.bg_colors.accent.dark_blue
      : "transparent"};
  background-image: url(${(props) => props.theme.pattern});
  background-position: left 105%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 3.2rem;
`;

const resolver = (pos: string, value: string) => `${pos}:${value};`;
export const FlexiWrapper = styled.div<{
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}>`
  position: absolute;
  ${(props) => (props.top ? resolver("top", props.top) : "")}
  ${(props) => (props.left ? resolver("left", props.left) : "")}
  ${(props) => (props.right ? resolver("right", props.right) : "")}
  ${(props) => (props.bottom ? resolver("bottom", props.bottom) : "")}
`;
