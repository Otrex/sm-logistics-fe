import Close from '@assets/svg/Close';
import React from 'react';

type ModalProps = React.HTMLProps<HTMLDivElement> & {
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtnClass?: string;
  show: boolean;
};

export default function Modal(props: ModalProps) {
  const toggle = (e: any) => props.toggleShow(false);
  return (
    <div className={'modal modal-backdrop' + (props.show ? '' : ' hide')}>
      <div className="modal modal-content-wrapper">
        <div
          onClick={toggle}
          className={props.closeBtnClass ? props.closeBtnClass : 'close'}
        >
          <Close />
        </div>
        {props.children}
      </div>
      <div onClick={toggle} className="modal modal-backdrop-closer"></div>
    </div>
  );
}
