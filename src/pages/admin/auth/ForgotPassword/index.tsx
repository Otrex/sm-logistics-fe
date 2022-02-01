import { mapStateOrActionToProps } from "@app/hoc";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import ForgotPasswordPanel from "@pages/rider/components/ForgotPasswordPanel";
import AuthAction from "@store/client/auth/actions";
import React from "react";
import ForgotPasswordController from "./controller";

function ForgotPassword(props: any) {
  return (
    <LayCenterWithLogo>
      <ForgotPasswordPanel {...props} />
    </LayCenterWithLogo>
  );
}

export default mapStateOrActionToProps({
  StateManager: ForgotPasswordController,
  Component: ForgotPassword,
  dispatchActions: {
    forgotPassword: AuthAction.forgotPassword,
  },
});
