import React from 'react';
import { H1, P } from '@ui-kit/TextTags';
import TextInput from '@ui-kit/Input';
import PasswordInput from '@ui-kit/PasswordInput';
import { Button } from '@ui-kit/ComponentTags';
import theme from '@app/theme';

function LoginPanel(props: any) {
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
              label="Enter Email Address"
              wrapperClass="w-full mb-12"
            />
            <PasswordInput label="Enter Password" />
            <P
              className="text-right mt-5"
              style={{ color: theme.text_color.accent.orange }}
            >
              Forgot Password?
            </P>
          </div>
          <Button
            bgColor={theme.bg_colors.accent.orange}
            textColor={theme.text_color.accent.dark_blue}
          >
            Login
          </Button>
          <P className="text-center mt-9">
            Dont have an account?{' '}
            <span
              style={{
                color: theme.text_color.accent.orange,
                textDecoration: 'underline',
              }}
            >
              Sign Up
            </span>
          </P>
        </form>
      </div>
    </>
  );
}

export default LoginPanel;
