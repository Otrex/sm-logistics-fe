import { mapStateOrActionToProps } from "@app/hoc";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import ResetPasswordPanel from "@pages/admin/components/ResetPasswordPanel";
import AuthAction from "@store/client/auth/actions";
import React from "react";
import ResetPasswordController from "./controller";

function ResetPassword(props: {
  stateMngr: ResetPasswordController;
}) {
  return (
    <LayCenterWithLogo>
      <ResetPasswordPanel {...props} />
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
