import { useFormState } from '@app/hooks';
import theme from '@app/theme';
import { Button } from '@ui-kit/ComponentTags';
import PasswordInput from '@ui-kit/PasswordInput';
import { H2, P } from '@ui-kit/TextTags';
import { useEffect, useState } from 'react';

export default function ResetPasswordPanel(props: any) {
  const [match, setMatch] = useState(false);

  const [form, setFormField] = useFormState({
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setMatch(Boolean(form.password === form.confirmPassword && form.password));
  }, [form.confirmPassword, form.password]);

  const getPassword = (e: any) => setFormField('password')(e.target.value);
  const getConfirmPassword = (e: any) =>
    setFormField('confirmPassword')(e.target.value);

  return (
    <div className="sm:w-3/3 md:w-2/4 lg:w-1/3 m-4">
      <div className="p-20 bg-white shadow-panel">
        <H2 className="mb-4"> Forgot Your Password? </H2>
        <P className="mb-12">
          Don’t worry. Please provide your mail so that we can assist with a
          password reset.
        </P>
        <PasswordInput
          wrapperClass="mb-12"
          label="Set New Password"
          onChange={getPassword}
        />
        <PasswordInput
          wrapperClass="mb-20"
          label="Confirm Password"
          confirmed={match}
          onChange={getConfirmPassword}
        />
        <Button
          bgColor={theme.bg_colors.accent.orange}
          textColor={theme.text_color.accent.dark_blue}
          disabled={!match}
        >
          Send Link
        </Button>
      </div>
      <P style={{ textDecoration: 'underline' }} className="mt-20 text-center">
        Go to Login
      </P>
    </div>
  );
}
