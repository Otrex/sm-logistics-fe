import { mapStateOrActionToProps } from '@app/hoc';
import theme from '@app/theme';
import Send from '@assets/svg/Send';
import { getValue } from '@app/utils';
import { logoutAsync, selectUser, updateUserDetails } from '@store/authSlice';
import {
  Button,
  Card,
  IconRounded,
  StyledPaymentCard,
} from '@ui-kit/ComponentTags';
import PhoneNumberInput from '@ui-kit/PhoneNumberInput';
import Input from '@ui-kit/Input';
import { P, H1, H2, H3, H4, H5, H6 } from '@ui-kit/TextTags';
import { useRef, useState } from 'react';

import ForgotPassword from './client/auth/ForgotPassword';
import Login from './client/auth/Login';
import Register from './client/auth/Register';
import ResetPassword from './client/auth/ResetPassword';
import { useGetValue } from '@app/hooks';
import FileInput from '@ui-kit/FileInput';
import Select from '@ui-kit/Select';

type Title = {
  title: string;
};

function Test({
  logg,
  userUpdate,
  user,
  title,
}: { logg: any; userUpdate: any; user: any } & Title) {
  const ref = useRef<any>();
  const [email, getEmail] = useGetValue('', (e: any) => {
    console.log(e.target.value);
    return true;
  });
  return (
    <>
      <Login />
      <Register />
      <ForgotPassword />
      <ResetPassword />
      <H1> Header 1 </H1>
      <H2> Header 2 </H2>
      <H3> Header 3 </H3>
      <H4> Header 4 </H4>
      <H5> Header 5 </H5>
      <H6> Header 6 </H6>
      <P> Hello {user && user.firstName} </P>

      <Button
        // disabled
        textColor={theme.text_color.accent.dark_blue}
        bgColor={theme.bg_colors.accent.orange}
        onClick={(e: any) => {
          const v = ref.current!;
          console.log(v.value);
          logg();
          userUpdate({ firstName: email });
        }}
      >
        MENU {title}
      </Button>

      <IconRounded content={<Send width="17" height="17" />} dim />
      <IconRounded content={<Send pathFill="red" />} dim large hover />
      <IconRounded bright large>
        Obi{' '}
      </IconRounded>
      <Card>{title}</Card>
      <StyledPaymentCard> Hello </StyledPaymentCard>
      <Select label="first" options={['obi', 'ada']} />
      <Select label="second" options={[{ name: 'obi' }, { name: 'ada' }]} />
      <FileInput label="Passport"></FileInput>
      <Input
        getRef={ref}
        label={`Email of ${email}`}
        onChange={getEmail}
      ></Input>
      <PhoneNumberInput label="Phone input" />
    </>
  );
}

export default mapStateOrActionToProps<Title>(
  Test,
  {
    logg: logoutAsync,
    userUpdate: updateUserDetails,
  },
  {
    user: selectUser,
  }
);
