import React, { useState, useEffect } from 'react';
import { H1, P } from '@ui-kit/TextTags';
import TextInput from '@ui-kit/Input';
import PasswordInput from '@ui-kit/PasswordInput';
import { Button } from '@ui-kit/ComponentTags';
import theme from '@app/theme';
import PhoneNumberInput from '@ui-kit/PhoneNumberInput';
import { useFormState } from '@app/hooks';

function RegisterPanel(props: any) {
  const [match, setMatch] = useState(false);
  const [notEmpty, setNotEmpty] = useState(false);

  const [form, setFormField] = useFormState({
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    Object.values(form).reduce((field) => !field, true);
  }, [...Object.values(form)]);

  useEffect(() => {
    setMatch(Boolean(form.password === form.confirmPassword && form.password));
  }, [form.confirmPassword, form.password]);

  const getPassword = (e: any) => setFormField('password')(e.target.value);
  const getConfirmPassword = (e: any) =>
    setFormField('confirmPassword')(e.target.value);

  return (
    <>
      <div className="flex items-center justify-center w-full p-11">
        <form name="login">
          <H1>Sign Up</H1>
          <P className="mt-2">
            We’ll love to know about you. Please provide your details to help us
            learn about you.
          </P>
          <div className="mt-12 mb-20 flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full">
                <TextInput label="First Name" wrapperClass="w-full mb-12" />{' '}
              </div>
              <div className="md:ml-5 w-full">
                {' '}
                <TextInput label="Last Name" wrapperClass="w-full mb-12" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:mr-5">
                <TextInput label="Email Address" wrapperClass="w-full mb-12" />
              </div>
              <div className="w-full md:ml-5">
                <PhoneNumberInput
                  label="Phone Number"
                  wrapperClass="w-full mb-12"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full mb-12">
                <PasswordInput label="Set Password" onChange={getPassword} />
              </div>
              <div className="md:ml-5 w-full mb-12">
                <PasswordInput
                  label="Confirm Password"
                  confirmed={match}
                  onChange={getConfirmPassword}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:mr-5 w-full mb-12">
                <P>
                  By Signing up, you agree to our{' '}
                  <span
                    style={{
                      color: theme.text_color.accent.orange,
                      textDecoration: 'underline',
                    }}
                  >
                    Privacy Policy
                  </span>{' '}
                  &amp;{' '}
                  <span
                    style={{
                      color: theme.text_color.accent.orange,
                      textDecoration: 'underline',
                    }}
                  >
                    Terms of Use
                  </span>
                </P>
              </div>
              <div className="md:ml-5 w-full">
                <Button
                  bgColor={theme.bg_colors.accent.orange}
                  textColor={theme.text_color.accent.dark_blue}
                >
                  Sign Up
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row"></div>
          </div>
          <P className="text-center mt-9">
            Already have an account?
            <span
              style={{
                color: theme.text_color.accent.orange,
                textDecoration: 'underline',
              }}
            >
              Login
            </span>
          </P>
        </form>
      </div>
    </>
  );
}

export default RegisterPanel;
