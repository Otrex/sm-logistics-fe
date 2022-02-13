import { mapStateOrActionToProps } from "@app/hoc";
import Lay3070 from "@components/layouts/Lay3070";
import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import AuthAction from "@store/client/auth/actions";
import LoginPanel from "./view";
import LoginLogic from "./controller";

function Login(props: any) {
  return (
    <LayCenterWithLogo>
      <LoginPanel className="outline" {...props} />
    </LayCenterWithLogo>
  );
}

export default mapStateOrActionToProps({
  Component: Login,
  StateManager: LoginLogic,
  dispatchActions: {
    login: AuthAction.login,
  },
});
