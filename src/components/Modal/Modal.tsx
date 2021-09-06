import React, { useEffect, useRef } from "react";

import ReactDOM from "react-dom";

import './Modal.scss'

const Modal = ({ children, isOpen, handleOnClose, shouldBeCloseOnOutsideClick }: {
  children: any;
  isOpen: boolean;
  handleOnClose: any;
  shouldBeCloseOnOutsideClick: boolean;
}) => {

  const modalRef = useRef<any>(null)
  const previousActiveElement = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const { current: modal } = modalRef; //destructurization modalRef

    if (isOpen) {  //open modal 
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) { //close modal
      modal.close();
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      handleOnClose();
    };

    modal.addEventListener("cancel", handleCancel);
    return () => {
      modal.removeEventListener("cancel", handleCancel);
    }
  }, [handleOnClose]);

  const handleOutsideClick = ({ target }: any) => { //function to close modal on outside click
    const { current } = modalRef;

    if (shouldBeCloseOnOutsideClick && target === current) {
      handleOnClose();
    }
  };

  return ReactDOM.createPortal(( // portal for modal
    <dialog className='modal' ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </dialog>
  ), document.body
  );
};

export default Modal;