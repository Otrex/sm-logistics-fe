import { mapStateOrActionToProps } from "@app/hoc";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import AuthAction from "@store/client/auth/actions";
import View from "./view";
import Controller from "./controller";

function ForgotPassword(props: any) {
  return (
    <LayCenterWithLogo>
      <View {...props} />
    </LayCenterWithLogo>
  );
}

export default mapStateOrActionToProps({
  StateManager: Controller,
  Component: ForgotPassword,
  dispatchActions: {
    forgotPassword: AuthAction.forgotPassword,
  },
});
