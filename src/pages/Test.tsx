import InputComponent from '@components/forms/InputComponent'
import React from 'react'

export default function Test() {
  return (
    <div className="outline p-20">
      <InputComponent label="hello" placeholder="Hello" className="border" required />
    </div>
  )
}
