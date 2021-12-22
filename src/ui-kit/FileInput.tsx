import { InputProps } from 'types/ui-kit';
import React from 'react';
import IconedInput from './IconedInput';
import styled, { ThemedStyledProps } from 'styled-components';

type IWrapper = ThemedStyledProps<
  Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    'key' | keyof React.HTMLAttributes<HTMLLabelElement>
  > & { paddingLeft?: string; paddingSide?: string },
  any
>;

const Wrapper = styled.div`
  height: ${(props) => props.theme.sizes.input.height};
  position: relative;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileLabel = styled.label.attrs((props: IWrapper) => {
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
  width: 100%;
  display: inline-block;
  // padding: ${(props) => props.theme.sizes.input.padding};
  height: ${(props) => props.theme.sizes.input.height};
  background-color: transparent !important;
  border: 0.5px solid #e5e5e5;

  &:hover,
  & *:hover {
    background-color: whitesmoke;
  }

  &:focus ~ div,
  & div.minify {
    padding-top: calc(${(props) => props.baseFontSize} - 0.6rem);
    ${(props) => props.font_size_color};
    height: calc(${(props) => props.theme.sizes.input.height} / 2);
    z-index: 1;
  }

  & div.minify:hover {
    background-color: transparent;
  }

  > div {
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

  > p {
    padding: ${(props) => props.baseLabelInputPadding};
    padding-left: ${(props) => props.paddingLeft};
    padding-bottom: calc(${(props) => props.baseFontSize} - 0.6rem);
    padding-top: calc(${(props) => props.baseFontSize} + 0.6rem);
    height: ${(props) => props.theme.sizes.input.height};
  }

  ~ div {
    font-size: ${(props) => props.baseFontSize};
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    right: 0px;
    // padding-left: ${(props) => props.paddingLeft};
    padding: ${(props) => props.theme.sizes.input.padding};
    background: #f2f2f2;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    width: inherit;
    height: calc(${(props) => props.theme.sizes.input.height} - 1rem);
  }
`;

export default function FileInput(props: InputProps) {
  const { onChange, label } = props;
  const [fileNames, setFileNames] = React.useState<string>('');

  const inputFocus = (e: any) => {
    const input = e.target.parentElement.parentElement.children[2];
    input.click();
  };

  const getFile = (e: any) => {
    setFileNames(e.target.files[0].name);
    if (onChange) onChange(e);
  };

  return (
    <>
      <Wrapper onClick={inputFocus}>
        <FileLabel>
          <div className={fileNames ? 'minify' : ''}> {label} </div>
          <p> {fileNames} </p>
        </FileLabel>
        <div style={{ cursor: 'pointer' }}> Upload </div>
        <HiddenInput {...props} onChange={getFile} type="file" />
      </Wrapper>
    </>
  );
}
