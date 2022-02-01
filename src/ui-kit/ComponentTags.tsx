import styled from "styled-components";
import { CardProps, IButtonProps, IconType } from "types/ui-kit";

const imgFull = `
img.full {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`;
export const IconRounded = styled.i.attrs((props: IconType) => ({
  children: props.content,
  ...props,
}))`
  width: ${(props) =>
    props.large ? "7.2rem" : props.size ? props.size : "5.2rem"};
  height: ${(props) =>
    props.large ? "7.2rem" : props.size ? props.size : "5.2rem"};
  border-radius: 50%;
  display: flex;	
  justify-content: center;
  align-items: center;			
	overflow: hidden;
	background-color: ${(props) =>
    props.dim
      ? props.theme.bg_colors.icon.dim
      : props.bright
      ? props.theme.bg_colors.icon.bright
      : undefined};
  :hover {
    background-color: ${(props) =>
      props.hover ? props.theme.bg_colors.icon.hover : undefined};
  }
  ${(props) => (props.imgFull ? imgFull : "")}
}
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  min-height: 188px;
  ${(props) => (props.fullHeight ? "height: 100% !important;" : "")}
  padding: 1rem;
  border-width: 1px;
  border-radius: 1rem;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  border-width: ${(props) => props.theme.sizes.ui_card.border_width};
  background-color: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.accent
      ? props.theme.bg_colors.accent.orange
      : "transparent"};
  color: ${(props) =>
    props.textColor
      ? props.textColor
      : props.theme.text_color.default};
  svg {
    color: ${(props) =>
      props.iconColor ? props.iconColor : "transparent"};
  }

  p,
  h3 {
    color: ${(props) => (props.accent ? "#03045E" : "inherit")};
  }
`;

export const StyledPaymentCard = styled.div`
  width: ${(props) => props.theme.sizes.atm_card.width};
  height: ${(props) => props.theme.sizes.atm_card.height};
  border-color: ${(props) => props.theme.border_colors.card};
  border-width: ${(props) => props.theme.sizes.ui_card.border_width};
  border-radius: 1rem;
  padding: 2.4rem;
  padding-top: 1rem;

  img.logo {
    margin-top: 1.2rem;
    width: auto;
    height: 2.4rem;
  }
`;

export const Button = styled.button<IButtonProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "5.6rem"};
  color: ${(props) =>
    props.textColor || props.theme.text_color.default};
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: 12px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const AccentButton = styled(Button)`
  background-color: ${(props) => props.theme.bg_colors.accent.orange};
  color: #03045e;
  font-weight: 500;
`;
