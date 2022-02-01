import EmailDark from "@assets/svg/EmailDark";
import { PropState } from "types/app.t";
import { IconRounded } from "@ui-kit/ComponentTags";
import OtpInput from "@ui-kit/OtpInput";
import { H2, P, A, P2 } from "@ui-kit/TextTags";
import EmailVerifyController from "./controller";

type Controller = PropState<EmailVerifyController>;
export default function View({ stateMngr: state }: Controller) {
  return (
    <div>
      <div className="p-20 text-center">
        <div className="flex justify-center mb-20">
          <IconRounded large dim>
            <EmailDark />
          </IconRounded>
        </div>
        <H2 className="text-center mb-4">
          We Sent You an OTP Code ???
        </H2>
        <P>
          An OTP has been sent to your email address for verification.
          Please enter the code below.{" "}
        </P>
        <div className="mt-20">
          <OtpInput
            amount={4}
            onChange={state.setOTP}
            onCompleted={state.submit}
          />
        </div>
      </div>
      <P2 className="mt-20 text-center">
        Didnt get Code?{" "}
        <A underline accent>
          Resend OTP Code
        </A>
      </P2>
    </div>
  );
}
