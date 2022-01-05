import React from "react";
import { InputProps } from "types/ui-kit";
import PhoneInput from "react-phone-number-input";
import styled from "styled-components";

const fontSizeColor = (props: any) => {
  const inputShrinkSize = `calc(${props.theme.sizes.font.default} - 0.2rem);`;
  return `
		font-size: ${inputShrinkSize};
		color: dimgrey;
	`;
};

const Wrapper = styled.div`
  :root {
    --PhoneInput-color--focus: #03b2cb;
    --PhoneInputInternationalIconPhone-opacity: 0.8;
    --PhoneInputInternationalIconGlobe-opacity: 0.65;
    --PhoneInputCountrySelect-marginRight: 0.35em;
    --PhoneInputCountrySelectArrow-width: 0.3em;
    --PhoneInputCountrySelectArrow-marginLeft: var(
      --PhoneInputCountrySelect-marginRight
    );
    --PhoneInputCountrySelectArrow-borderWidth: 1px;
    --PhoneInputCountrySelectArrow-opacity: 0.45;
    --PhoneInputCountrySelectArrow-color: inherit;
    --PhoneInputCountrySelectArrow-color--focus: var(
      --PhoneInput-color--focus
    );
    --PhoneInputCountrySelectArrow-transform: rotate(45deg);
    --PhoneInputCountryFlag-aspectRatio: 1.5;
    --PhoneInputCountryFlag-height: 1em;
    --PhoneInputCountryFlag-borderWidth: 1px;
    --PhoneInputCountryFlag-borderColor: rgba(0, 0, 0, 0.5);
    --PhoneInputCountryFlag-borderColor--focus: var(
      --PhoneInput-color--focus
    );
    --PhoneInputCountryFlag-backgroundColor--loading: rgba(
      0,
      0,
      0,
      0.1
    );
  }
  position: relative;
  width: 100%;
  & .PhoneInput {
    /* This is done to stretch the contents of this component. */
    display: flex;
    align-items: center;
    width: 100%;
    height: ${(props) => props.theme.sizes.input.height};
  }

  .PhoneInputInput {
    flex: 1;
    min-width: 0;
    width: 100%;
    padding: ${(props) => props.theme.sizes.input.padding};
    padding-left: 10rem;
    padding-bottom: calc(
      ${(props) => props.theme.sizes.font.default} - 0.6rem
    );
    padding-top: calc(
      ${(props) => props.theme.sizes.font.default} + 0.6rem
    );
    height: ${(props) => props.theme.sizes.input.height};
    background-color: transparent !important;
    border: 0.5px solid #e5e5e5;
    border-radius: 4px;
    position: absolute;
  }
  .PhoneInput--focus ~ label,
  & label.minify {
    padding-top: calc(
      ${(props) => props.theme.sizes.font.default} - 0.6rem
    );
    ${(props) => fontSizeColor(props)};
    height: calc(${(props) => props.theme.sizes.input.height} / 2);
    z-index: -1;
  }

  & label {
    font-size: ${(props) => props.theme.sizes.font.default};
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    left: 0px;
    padding-left: 10rem;
    width: inherit;
    height: ${(props) => props.theme.sizes.input.height};
  }

  .PhoneInputCountryIcon {
    width: 2.4rem;
    height: var(--PhoneInputCountryFlag-height);
  }

  .PhoneInputCountryIcon--square {
    width: var(--PhoneInputCountryFlag-height);
  }

  .PhoneInputCountryIcon--border {
    background-color: var(
      --PhoneInputCountryFlag-backgroundColor--loading
    );
    box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor),
      inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor);
  }

  .PhoneInputCountryIconImg {
    display: block;
    width: 40px;
    height: 100%;
    border-radius: 0.3rem;
  }

  .PhoneInputInternationalIconPhone {
    opacity: var(--PhoneInputInternationalIconPhone-opacity);
  }

  .PhoneInputInternationalIconGlobe {
    opacity: var(--PhoneInputInternationalIconGlobe-opacity);
  }

  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: ${(props) => props.theme.sizes.input.padding};
    margin-right: var(--PhoneInputCountrySelect-marginRight);
    background: #f2f2f2;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }

  .PhoneInputCountrySelect {
    position: absolute;
    top: 0;
    left: 0;
    height: ${(props) => props.theme.sizes.input.height};
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
  }

  .PhoneInputCountrySelect[disabled] {
    cursor: default;
  }

  .PhoneInputCountrySelectArrow {
    display: block;
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.6rem;
    margin-left: 1.2rem;
    border-style: solid;
    border-color: #4f4f4f;
    border-top-width: 0;
    border-bottom-width: 0.15rem;
    border-left-width: 0;
    border-right-width: 0.15rem;
    transform: rotate(45deg) translateY(-0.5rem);
    opacity: var(--PhoneInputCountrySelectArrow-opacity);
  }

  .PhoneInput--focus .PhoneInputCountrySelect:focus ~ div ~ div {
    transform: rotate(225deg);
  }

  .PhoneInputCountrySelect:focus
    + .PhoneInputCountryIcon
    + .PhoneInputCountrySelectArrow {
    opacity: 1;
    color: var(--PhoneInputCountrySelectArrow-color--focus);
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor--focus),
      inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor--focus);
  }

  .PhoneInputCountrySelect:focus
    + .PhoneInputCountryIcon
    .PhoneInputInternationalIconGlobe {
    opacity: 1;
    color: var(--PhoneInputCountrySelectArrow-color--focus);
  }
`;

export default function PhoneNumberInput({
  label,
  labelClass,
  wrapperClass,
  ...props
}: InputProps) {
  const labelEl = React.useRef<HTMLLabelElement>();

  const onClick = () => {
    const parent = labelEl.current!.parentElement! as HTMLDivElement;
    parent.querySelector("input")?.focus();
  };

  const monitorInput = (e: any) => {
    if (e) labelEl.current!.classList.add("minify");
    else labelEl.current!.classList.remove("minify");
    if (props.onChange) props.onChange(e);
  };

  return (
    <Wrapper className={wrapperClass}>
      <PhoneInput
        {...(props as any)}
        international={false}
        defaultCountry="NG"
        onChange={monitorInput}
      />
      <label
        ref={labelEl as React.MutableRefObject<HTMLLabelElement>}
        className={labelClass}
        onClick={onClick}
      >
        {label}
      </label>
    </Wrapper>
  );
}
