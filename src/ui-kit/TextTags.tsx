import styled from 'styled-components';
import { IAProps } from 'types/ui-kit';

export const H1 = styled.h1.attrs((props: any & { white?: boolean }) => ({
  ...props,
}))`
  font-family: Poppins;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${(props) => (props.white ? 'white' : props.theme.text_color.default)};
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const H3 = styled.h3`
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const H4 = styled.h4.attrs(
  (props: any & { bold: boolean; semibold: boolean }) => ({
    ...props,
  })
)`
  font-family: Poppins;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: ${(props) =>
    props.bold ? '600' : props.semibold ? '500' : '400'};
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const H5 = styled.h5``;

export const H6 = styled.h6``;

export const P = styled.p`
  font-family: Poppins;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
`;

export const A = styled.a<IAProps>`
  ${(props) => (props.underline ? 'text-decoration: underline;' : '')}
  ${(props) =>
    props.accent ? `color: ${props.theme.text_color.accent.orange};` : ''}
`;
