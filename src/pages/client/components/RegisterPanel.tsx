import { A, H1, P } from "@ui-kit/TextTags";
import TextInput from "@ui-kit/Input";
import PasswordInput from "@ui-kit/PasswordInput";
import { AccentButton } from "@ui-kit/ComponentTags";
import PhoneNumberInput from "@ui-kit/PhoneNumberInput";

function RegisterPanel({ stateMngr: state }: any) {
  return (
    <>
      <div className="flex items-center justify-center w-full p-11">
        <form name="login">
          <H1>Sign Up</H1>
          <P className="mt-2">
            We’ll love to know about you. Please provide your details
            to help us learn about you.
          </P>
          <div className="mt-12 mb-20 flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full">
                <TextInput
                  label="First Name"
                  onChange={state.setFirstName}
                  wrapperClass="w-full mb-12"
                />{" "}
              </div>
              <div className="md:ml-5 w-full">
                {" "}
                <TextInput
                  label="Last Name"
                  onChange={state.setLastName}
                  wrapperClass="w-full mb-12"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:mr-5">
                <TextInput
                  label="Email Address"
                  wrapperClass="w-full mb-12"
                  onChange={state.setEmail}
                  type="email"
                />
              </div>
              <div className="w-full md:ml-5">
                <PhoneNumberInput
                  label="Phone Number"
                  wrapperClass="w-full mb-12"
                  onChange={state.setPhoneNumber}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full mb-12">
                <PasswordInput
                  label="Set Password"
                  onChange={state.setPassword}
                />
              </div>
              <div className="md:ml-5 w-full mb-12">
                <PasswordInput
                  label="Confirm Password"
                  confirmed={state.isMatch}
                  onChange={state.setConfirmPassword}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full mb-12">
                <P>
                  By Signing up, you agree to our{" "}
                  <A accent underline>
                    Privacy Policy
                  </A>{" "}
                  &amp;{" "}
                  <A accent underline>
                    Terms of Use
                  </A>
                </P>
              </div>
              <div className="md:ml-5 w-full">
                <AccentButton onClick={state.register}>
                  Sign Up
                </AccentButton>
              </div>
            </div>

            <div className="flex flex-col md:flex-row"></div>
          </div>
          <P className="text-center mt-9">
            Already have an account?&nbsp;
            <A accent underline>
              Login
            </A>
          </P>
        </form>
      </div>
    </>
  );
}

export default RegisterPanel;
