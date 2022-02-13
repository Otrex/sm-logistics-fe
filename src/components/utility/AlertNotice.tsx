import Alarm from "@assets/svg/Alarm";
import { IconRounded } from "@ui-kit/ComponentTags";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Indicator = styled.span`
  display: inline-block;
  position: absolute;
  top: 15%;
  right: 20%;
  background: #fab60b;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  vertical-align: center;
  color: #fff;
`;

const AlertNotice = ({
  amount,
  onClick,
}: {
  amount: number;
  onClick?: (e: any) => void;
}) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        {amount ? <Indicator>{amount}</Indicator> : <></>}
        <IconRounded>
          <Alarm />
        </IconRounded>
      </Wrapper>
    </>
  );
};

AlertNotice.defaultProps = {
  amount: 0,
};

export default AlertNotice;
