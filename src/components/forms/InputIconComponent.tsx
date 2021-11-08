import React from 'react'
import InputComponent from "./InputComponent";


export default function InputIconComponent(props: any) {
  return (
    <div className="input-wrapper with-span">
      <InputComponent { ...props }/>
      <span></span>
    </div>
  )
}
