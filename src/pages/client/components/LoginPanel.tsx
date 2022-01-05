import React from "react";
import { A, H1, P } from "@ui-kit/TextTags";
import TextInput from "@ui-kit/Input";
import PasswordInput from "@ui-kit/PasswordInput";
import { AccentButton, Button } from "@ui-kit/ComponentTags";

function LoginPanel(props: any) {
  const { stateMngr: state } = props;
  return (
    <>
      <div className="flex items-center justify-center w-full p-11">
        <form name="login">
          <H1>Login</H1>
          <P className="mt-2">
            Please provide your details to log into your profile.
          </P>
          <div className="mt-12 mb-20">
            <TextInput
              type="email"
              label="Enter Email Address"
              wrapperClass="w-full mb-12"
              onChange={state.setEmail}
            />
            <PasswordInput
              label="Enter Password"
              onChange={state.setPassword}
            />

            <div className="text-right mt-5" ref={state.ref}>
              <A accent href="https://google.com">
                Forgot Password?
              </A>
            </div>
          </div>
          <AccentButton onClick={state.login}>Login</AccentButton>
          <P className="text-center mt-9">
            Dont have an account?&nbsp;
            <A href="/client/register" accent underline>
              Sign Up
            </A>
          </P>
        </form>
      </div>
    </>
  );
}

export default LoginPanel;
