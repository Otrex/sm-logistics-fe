import React from 'react'
import '@styles/input.component.css';
import { InputProps } from '@components/types';
import { r } from '@app/core/utilities';

const InputComponent = ({ label, labelClass, wrapperClass, ref, ...props }: InputProps) => {
  const inputEl = React.useRef<HTMLInputElement>();
  const onClick = () => void inputEl.current!.focus();
  const [minify, setMinify] = React.useState<string>("");

  const monitorInput = (e: any) => {
    setMinify(e.target.value ? "minify": "")
    if (props.onChange) props.onChange(e)
  }

  return (
    <div className={r([wrapperClass, "input-wrapper"])}>
      <input 
        { ...props } 
        onChange={monitorInput} 
        placeholder="" 
        ref={inputEl as React.MutableRefObject<HTMLInputElement>} 
      />
      { label ? <label 
        className={r([labelClass, minify ])} 
        onClick={onClick}
      >{ label }</label> : <></> }
    </div>
  )
}

InputComponent.defaultProps = {
  labelClass: undefined,
  label: undefined,
  wrapperClass: []
}

export default InputComponent

/* JUNK */
// React.useImperativeHandle(ref, () => ({
//   focus: () => {
//     inputEl.current!.focus();
//   }
// }));
