import Lay3070 from '@components/layouts/Lay3070';
import React from 'react';
import AuthSidePanel from '../components/AuthSidePanel';
import RegisterPanel from '../components/RegisterPanel';

export default function Register() {
  return (
    <Lay3070>
      <AuthSidePanel />
      <RegisterPanel className="outline" />
    </Lay3070>
  );
}
