import theme from "@app/theme";
import { AccentButton, Button } from "@ui-kit/ComponentTags";
import TextInput from "@ui-kit/Input";
import { H2, P, A } from "@ui-kit/TextTags";
import { useState } from "react";

export default function ForgotPasswordPanel(props: any) {
  const [button, setButton] = useState(true);

  const getValue = (e: any) =>
    void setButton(e.target.value ? false : true);
  return (
    <div className="sm:w-3/3 md:w-2/4 lg:w-1/3 m-4">
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
          onChange={getValue}
        />
        <AccentButton disabled={button}>Send Link</AccentButton>
      </div>
      <P className="mt-20 text-center">
        <A underline>Go to Login</A>
      </P>
    </div>
  );
}
