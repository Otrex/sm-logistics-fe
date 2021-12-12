import Hide from '@assets/svg/Hide';
import { InputProps } from 'types/ui-kit';
import React, { useState } from 'react';
import IconedInput from './IconedInput';

export default function PasswordInput(props: InputProps) {
  const [show, setShow] = useState(false);
  return (
    <IconedInput
      {...props}
      type={show ? 'text' : 'password'}
      paddingSide="50px"
      icon={
        <Hide
          onClick={() => setShow(!show)}
          style={{ opacity: show ? 0.3 : 1 }}
        />
      }
    />
  );
}
