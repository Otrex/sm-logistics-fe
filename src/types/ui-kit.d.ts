import { InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type IconType = {
  hover?: boolean;
  large?: boolean;
  dim?: boolean;
  size?: string;
  bright?: boolean;
  imgFull?: boolean;
  content?: any;
};

export type CardProps = {
  active?: boolean;
  color?: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
  borderColor?: string;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  getRef?: MutableRefObject<HTMLLabelElement>;
  labelClass?: string;
  label: string;
  wrapperClass?: string;
  paddingSide?: string;
  paddingLeft?: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}
