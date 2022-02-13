import { mapStateOrActionToProps } from "@app/hoc";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import AuthAction from "@store/client/auth/actions";
import React from "react";
import EmailVerifyOTPPanel from "./EmailVerifyOTPPanel";
import EmailVerifyController from "./controller";

function EmailVerify(props: any) {
  return (
    <LayCenterWithLogo>
      <EmailVerifyOTPPanel {...props} />
    </LayCenterWithLogo>
  );
}

export default mapStateOrActionToProps({
  StateManager: EmailVerifyController,
  Component: EmailVerify,
  dispatchActions: {
    emailVerify: AuthAction.emailVerify,
  },
});
