import Lay3070 from '@components/layouts/Lay3070';
import React from 'react';
import AuthSidePanel from '../components/AuthSidePanel';
import LoginPanel from '../components/LoginPanel';

export default function Login() {
  return (
    <Lay3070>
      <AuthSidePanel />
      <LoginPanel className="outline" />
    </Lay3070>
  );
}
