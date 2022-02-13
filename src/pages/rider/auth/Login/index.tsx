import { mapStateOrActionToProps } from "@app/hoc";
import Lay3070 from "@components/layouts/Lay3070";
import AuthAction from "@store/client/auth/actions";
import AuthSidePanel from "../../components/AuthSidePanel";
import LoginPanel from "./view";
import LoginLogic from "./controller";

function Login(props: any) {
  return (
    <Lay3070>
      <AuthSidePanel />
      <LoginPanel className="outline" {...props} />
    </Lay3070>
  );
}

export default mapStateOrActionToProps({
  Component: Login,
  StateManager: LoginLogic,
  dispatchActions: {
    login: AuthAction.login,
  },
});
