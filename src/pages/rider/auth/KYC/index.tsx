import { mapStateOrActionToProps } from "@app/hoc";
import KYCPanel from "@pages/rider/components/KYCPanel";
import AuthAction from "@store/client/auth/actions";
import KYCController from "./controller";

function KYC(props: any) {
  return <KYCPanel className="outline" {...props} />;
}

export default mapStateOrActionToProps({
  StateManager: KYCController,
  Component: KYC,
  dispatchActions: {
    register: AuthAction.register,
  },
});
