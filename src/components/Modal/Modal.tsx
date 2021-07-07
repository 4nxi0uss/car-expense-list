import React, { useEffect, useRef } from "react";

import ReactDOM from "react-dom";

import './Modal.scss'

const Modal = ({children, isOpen, handleOnClose,shouldBeCloseOnOutsideClick}:any)=>{

// console.log('modal')

    const modalRef = useRef<any>(null)
    // console.log(modalRef.current)
    const previousActiveElement = useRef<any>(null);
    // console.log(previousActiveElement.current)

    useEffect(() => {
        if (!modalRef.current) {
          return;
        }
    
        const { current: modal } = modalRef;
    
        if (isOpen) {
          previousActiveElement.current = document.activeElement;
          modal.showModal();
        } else if (previousActiveElement.current) {
          modal.close();
          previousActiveElement.current.focus();
        }
      }, [isOpen]);

      useEffect(() => {
        const { current: modal } = modalRef;
    
        const handleCancel = (e:any) => {
          e.preventDefault();
          handleOnClose();
        };
    
        modal.addEventListener("cancel", handleCancel);
        return () => {
          modal.removeEventListener("cancel", handleCancel);
        }
      }, [handleOnClose]);

      const handleOutsideClick = ({ target }:any) => {
        const { current } = modalRef;
    
        if (shouldBeCloseOnOutsideClick && target === current) {
          handleOnClose();
        }
      };

    return ReactDOM.createPortal((
        <dialog className='modal' ref={modalRef} onClick={handleOutsideClick}>
            {children}
        </dialog>
    ), document.body
    );
};

export default Modal;