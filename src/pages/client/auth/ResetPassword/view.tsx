import { PropState } from "types/app.t";
import { AccentButton } from "@ui-kit/ComponentTags";
import PasswordInput from "@ui-kit/PasswordInput";
import { H2, P } from "@ui-kit/TextTags";
import ResetPasswordController from "./controller";

type Controller = PropState<ResetPasswordController>;
export default function View({ stateMngr: state }: Controller) {
  return (
    <div>
      <div className="p-20 bg-white shadow-panel">
        <H2 className="mb-4"> Forgot Your Password? </H2>
        <P className="mb-12">
          Don’t worry. Please provide your mail so that we can assist
          with a password reset.
        </P>
        <PasswordInput
          wrapperClass="mb-12"
          label="Set New Password"
          onChange={state.setPassword}
        />
        <PasswordInput
          wrapperClass="mb-20"
          label="Confirm Password"
          confirmed={state.status.isMatch}
          onChange={state.setConfirmPassword}
        />
        <AccentButton
          onClick={state.submit}
          disabled={!state.status.isReady}
        >
          Send Link
        </AccentButton>
      </div>
      <P
        style={{ textDecoration: "underline" }}
        className="mt-20 text-center"
      >
        Go to Login
      </P>
    </div>
  );
}
