import { FlexiWrapper, Wrapper } from '@components/layouts/SideWapper';
import logo from '@assets/img/logo-white.png';
import mascot from '@assets/img/mascot.png';
import React from 'react';
import { H1 } from '@ui-kit/TextTags';

export default function AuthSidePanel() {
  return (
    <>
      <Wrapper>
        <div>
          {' '}
          <img src={logo} alt="logo" />{' '}
        </div>
        <div className="mt-28 mb-8">
          <H1 white>Experience Super-Fast Delivery with Optimal Quality</H1>
        </div>
        <FlexiWrapper className="w-7/12" bottom="0" right="0">
          <img src={mascot} alt="mascot" />
        </FlexiWrapper>
      </Wrapper>
    </>
  );
}
