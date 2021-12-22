import DownCaret from '@assets/svg/DownCaret';
import React from 'react';
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

const Wrapper = styled.div`
  height: ${(props) => props.theme.sizes.input.height};
  position: relative;
`;

const Options = styled.div`
  width: 100%;
  display: inline-block;
  height: auto;
  background-color: transparent !important;
  border: 0.5px solid #e5e5e5;
  position: absolute;
  z-index: 2;
  top: ${(props) => props.theme.sizes.input.height};
  background: red;
  height: auto;
  box-shadow: 0 3px 3px rgba(150, 150, 150, 0.1);

  & li {
    padding: calc(${(props) => props.theme.sizes.input.padding} / 2)
      ${(props) => props.theme.sizes.input.padding};
    background: white;
    cursor: pointer;
  }

  & li:hover {
    background-color: whitesmoke;
  }
`;

const Selection = styled.div.attrs((props: IWrapper) => {
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
  position: relative;

  &:hover,
  & *:hover {
    background-color: whitesmoke;
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: ${(props) => props.theme.sizes.input.padding};
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
`;

function stringify<F>(option: F) {
  return typeof option === 'object'
    ? option === null
      ? ''
      : JSON.stringify(option)
    : option;
}

function Select<F>(props: {
  label: string;
  options: F[];
  defaultValue?: F;
  selectionView?: (selected: any) => JSX.Element;
  optionView?: (props: any) => JSX.Element;
}) {
  const { options, optionView, selectionView, defaultValue, label } = props;
  const [selected, setSelected] = React.useState<F | null>(
    defaultValue || null
  );
  const [selecting, setSelecting] = React.useState(false);

  const makeSelection = (key: number) => (e: any) => {
    setSelected(options[key]);
    setSelecting(false);
  };

  return (
    <>
      <Wrapper>
        <Selection onClick={(e) => setSelecting((sel) => !sel)}>
          <div className={selected ? 'minify' : ''}> {label} </div>
          <p>
            {selectionView
              ? selectionView({ selected })
              : stringify<F>(selected!)}
          </p>
          <DownCaret
            style={{
              transform: selecting
                ? 'translateY(-50%) rotate(180deg)'
                : 'translateY(-50%)',
            }}
          />
        </Selection>
        <Options style={{ display: selecting ? 'block' : 'none' }}>
          <ul>
            {options.map((option, idx) => (
              <li key={idx} onClick={makeSelection(idx)}>
                {optionView ? optionView({ option }) : stringify<F>(option)}
              </li>
            ))}
          </ul>
        </Options>
      </Wrapper>
    </>
  );
}

export default Select;
