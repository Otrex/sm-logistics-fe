import Hide from '@assets/svg/Hide';
import { InputProps } from 'types/ui-kit';
import React, { useState } from 'react';
import IconedInput from './IconedInput';
import Check from '@assets/svg/Check';

export default function PasswordInput({
  confirmed,
  ...props
}: InputProps & { confirmed?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <IconedInput
      {...props}
      type={show ? 'text' : 'password'}
      paddingSide="50px"
      icon={
        !confirmed ? (
          <Hide
            onClick={() => setShow(!show)}
            style={{ opacity: show ? 0.3 : 1 }}
          />
        ) : (
          <Check
            onClick={() => setShow(!show)}
            style={{ opacity: show ? 0.3 : 1 }}
          />
        )
      }
    />
  );
}
