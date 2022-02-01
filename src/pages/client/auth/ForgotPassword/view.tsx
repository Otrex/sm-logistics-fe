import { PropState } from "types/app.t";
import { AccentButton } from "@ui-kit/ComponentTags";
import TextInput from "@ui-kit/Input";
import { H2, P, A } from "@ui-kit/TextTags";
import ForgotPasswordController from "./controller";

type ControllerType = PropState<ForgotPasswordController>;
export default function View({ stateMngr: state }: ControllerType) {
  return (
    <div>
      <div className="p-20 bg-white shadow-panel">
        <H2 className="mb-4"> Forgot Your Password? </H2>
        <P className="mb-12">
          {" "}
          Don’t worry. Please provide your mail so that we can assist
          with a password reset.{" "}
        </P>
        <TextInput
          type="email"
          label="Email Address"
          wrapperClass="mb-20"
          onChange={state.setEmail}
        />
        <AccentButton
          disabled={!state.isReady}
          onClick={state.submit}
        >
          Send Link
        </AccentButton>
      </div>
      <P className="mt-20 text-center">
        <A underline>Go to Login</A>
      </P>
    </div>
  );
}
