import theme from '@app/theme';
import Send from '@assets/svg/Send';
import {
  Button,
  Card,
  IconRounded,
  StyledPaymentCard,
} from '@ui-kit/ComponentTags';
import TextInput from '@ui-kit/TextInput';
import { P, H1, H2, H3, H4, H5, H6 } from '@ui-kit/TextTags';
import { useRef } from 'react';
import Login from './client/auth/Login';

export default function Test() {
  const ref = useRef<any>();

  return (
    <>
      <Login />
      <H1> Header 1</H1>
      <H2> Header 2</H2>
      <H3> Header 3</H3>
      <H4> Header 4</H4>
      <H5> Header 5</H5>
      <H6> Header 6</H6>
      <P> Hello </P>

      <Button
        disabled
        textColor={theme.text_color.accent.dark_blue}
        bgColor={theme.bg_colors.accent.orange}
        onClick={(e: any) => {
          const v = ref.current!;
          console.log(v.value);
        }}
      >
        {' '}
        MENU{' '}
      </Button>

      <IconRounded content={<Send width="17" height="17" />} dim />
      <IconRounded content={<Send pathFill="red" />} dim large hover />
      <IconRounded bright large>
        {' '}
        Obi{' '}
      </IconRounded>
      <Card></Card>
      <StyledPaymentCard></StyledPaymentCard>
      <TextInput getRef={ref} label="Email of me"></TextInput>
    </>
  );
}
