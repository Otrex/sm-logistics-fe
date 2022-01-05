import Close from "@assets/svg/Close";
import React from "react";
import styled from "styled-components";

export type ModalProps = React.HTMLProps<HTMLDivElement> & {
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtnClass?: string;
  whiteCloseBtn?: boolean;
  show: boolean;
};

const ModalBackdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.4);
  top: 0px;
  left: 0px;
  z-index: 10;

  &.hide {
    opacity: 0;
    z-index: -1;
  }

  & .close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 11;
  }
`;

const ModalBackdropCloser = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
`;

const ModalContentWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export default function Modal(props: ModalProps) {
  const { toggleShow, closeBtnClass, whiteCloseBtn } = props;
  const toggle = () => toggleShow(false);

  return (
    <ModalBackdrop className={props.show ? "" : "hide"}>
      <ModalContentWrapper>
        <div onClick={toggle} className={closeBtnClass || "close"}>
          <Close stroke={whiteCloseBtn ? "white" : "#4F4F4F"} />
        </div>
        {props.children}
      </ModalContentWrapper>
      <ModalBackdropCloser onClick={toggle} />
    </ModalBackdrop>
  );
}
