import { mapStateOrActionToProps } from "@app/hoc";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import AuthAction from "@store/client/auth/actions";
import View from "./view";
import React from "react";
import ResetPasswordController from "./controller";

function ResetPassword(props: {
  stateMngr: ResetPasswordController;
}) {
  return (
    <LayCenterWithLogo>
      <View {...props} />
    </LayCenterWithLogo>
  );
}

export default mapStateOrActionToProps({
  StateManager: ResetPasswordController,
  Component: ResetPassword,
  dispatchActions: {
    resetPassword: AuthAction.resetPassword,
  },
});
