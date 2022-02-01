import styled from "styled-components";

export const Wrapper = styled.div<{
  noBg?: boolean;
  padding?: string;
  bgSize?: string;
  heightCss?: string;
  topCss?: string;
  className?: string;
}>`
  background-color: ${(props) =>
    !props.noBg
      ? props.theme.bg_colors.accent.dark_blue
      : "transparent"};
  background-image: url(${(props) => props.theme.pattern});
  background-position: left
    ${(props) => (props.padding ? props.topCss || "115%" : "105%")};
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize || "contain"};
  height: ${(props) => props.heightCss || "100vh"};
  width: 100%;
  position: relative;
  padding: ${(props) => props.padding || "3.2rem"};
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
