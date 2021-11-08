import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClass: string, 
  label: string,
  wrapperClass: string,
  ref ?:any
}