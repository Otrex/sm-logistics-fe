import {
  FlexiWrapper,
  Wrapper,
} from "@components/layouts/SideWapper";
import logo from "@assets/img/logo-white.png";
import { H1, P } from "@ui-kit/TextTags";
import styled from "styled-components";
import loginBg from "@assets/img/SectionBG.png";
import registerBg from "@assets/img/SectionBG2.png";

const WrapperLogin = styled.div`
  background-image: url(${loginBg});
  background-size: cover;
  overflow: hidden;
`;

const WrapperRegister = styled.div`
  background-image: url(${registerBg});
  background-size: cover;
  overflow: hidden;
`;

export default function AuthSidePanel({
  isRegister,
}: {
  isRegister?: boolean;
}) {
  return (
    <>
      {!isRegister ? (
        <WrapperLogin>
          <Wrapper noBg>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="mt-28 mb-8 flex h-full items-center pb-96">
              <H1 white className="translate-y-50">
                Welcome Back! <br />
                Its Another Day to Deliver Optimal Excellence.
              </H1>
            </div>
            <FlexiWrapper
              className="w-7/12"
              bottom="0"
              right="0"
            ></FlexiWrapper>
          </Wrapper>
        </WrapperLogin>
      ) : (
        <WrapperRegister>
          <Wrapper noBg>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="mt-28 mb-8 flex h-full items-center pb-96">
              <div className="translate-y-50 mb-20">
                <H1 white>
                  Join the Most Amazing Delivery Network Ever!
                </H1>
                <P className="text-white">
                  We’re happy to have people who wants to contirbute
                  to creating an easier liestyle for our clients. So,
                  feel free to sign up and we’ll be in touch shortly.
                </P>
              </div>
            </div>
          </Wrapper>
        </WrapperRegister>
      )}
    </>
  );
}
