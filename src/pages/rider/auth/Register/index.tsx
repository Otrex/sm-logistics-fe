import { mapStateOrActionToProps } from "@app/hoc";
import Lay3070 from "@components/layouts/Lay3070";
import AuthAction from "@store/client/auth/actions";
import React from "react";
import AuthSidePanel from "../../components/AuthSidePanel";
import RegisterPanel from "./view";
import RegisterController from "./controller";

function Register(props: any) {
  return (
    <Lay3070>
      <AuthSidePanel isRegister />
      <RegisterPanel className="outline" {...props} />
    </Lay3070>
  );
}

export default mapStateOrActionToProps({
  StateManager: RegisterController,
  Component: Register,
  dispatchActions: {
    register: AuthAction.register,
  },
});
