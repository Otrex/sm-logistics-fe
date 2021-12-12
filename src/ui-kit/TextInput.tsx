import React from 'react';
import { InputProps } from 'types/ui-kit';
import styled, { ThemedStyledProps } from 'styled-components';

type IWrapper = ThemedStyledProps<
  Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'key' | keyof React.HTMLAttributes<HTMLDivElement>
  > & { paddingLeft?: string; paddingSide?: string },
  any
>;

const Wrapper = styled.div.attrs((props: IWrapper) => {
  const inputShrinkSize = `calc(${props.theme.sizes.font.default} - 0.2rem);`;
  const font_size_color = `
    font-size: ${inputShrinkSize};
    color: dimgrey;
  `;
  return {
    ...props,
    inputShrinkSize,
    font_size_color,
    baseFontSize: props.theme.sizes.font.default,
    baseLabelInputPadding: props.theme.sizes.input.padding,
    paddingLeft: props.paddingLeft || props.theme.sizes.input.padding,
  };
})`
  position: relative;
  z-index: 0;
  height: ${(props) => props.theme.sizes.input.height};

  & ~ .with-span {
    font-size: ${(props) => props.baseFontSize};
    padding-left: ${(props) => props.paddingLeft};
    position: absolute;
    top: 0px;
    right: 0px;
  }

  &:hover {
    background-color: whitesmoke;
  }

  & input {
    width: 100%;
    padding: ${(props) => props.baseLabelInputPadding};
    padding-left: ${(props) => props.paddingLeft};
    padding-bottom: calc(${(props) => props.baseFontSize} - 0.6rem);
    padding-top: calc(${(props) => props.baseFontSize} + 0.6rem);
    height: ${(props) => props.theme.sizes.input.height};
    background-color: transparent !important;
    border: 0.5px solid #e5e5e5;
    border-radius: 4px;
    ${(props) =>
      props.paddingSide ? `padding-right: ${props.paddingSide};` : ''}
  }

  & input:required {
    background-color: transparent !important;
    box-shadow: 0px 0px 5px red;
  }

  & input:focus ~ label,
  & label.minify {
    padding-top: calc(${(props) => props.baseFontSize} - 0.6rem);
    ${(props) => props.font_size_color};
    height: calc(${(props) => props.theme.sizes.input.height} / 2);
    z-index: -1;
  }

  & label {
    font-size: ${(props) => props.baseFontSize};
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    left: 0px;
    padding-left: ${(props) => props.paddingLeft};
    width: inherit;
    height: ${(props) => props.theme.sizes.input.height};
  }
`;

const TextInput = ({
  label,
  labelClass,
  paddingSide,
  wrapperClass,
  getRef,
  ...props
}: InputProps) => {
  const labelEl = React.useRef<HTMLLabelElement>();

  const onClick = () => {
    const parent = labelEl.current!.parentElement! as HTMLDivElement;
    parent.querySelector('input')?.focus();
  };

  const monitorInput = (e: any) => {
    if (e.target.value) labelEl.current!.classList.add('minify');
    else labelEl.current!.classList.remove('minify');
    if (props.onChange) props.onChange(e);
  };

  return (
    <>
      <Wrapper className={wrapperClass} paddingSide={paddingSide}>
        <input {...props} ref={getRef} onChange={monitorInput} placeholder="" />
        <label
          ref={labelEl as React.MutableRefObject<HTMLLabelElement>}
          className={labelClass}
          onClick={onClick}
        >
          {label}
        </label>
      </Wrapper>
    </>
  );
};

TextInput.defaultProps = {
  labelClass: undefined,
  label: undefined,
  wrapperClass: [],
};

export default TextInput;
