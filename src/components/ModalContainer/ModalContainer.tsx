import React from "react";
import "./ModalContainer.css";
import Modal from "react-modal";

interface IModalContainer {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customClassName?: string;
  children: React.ReactNode;
}

const ModalContainer = ({
  modalIsOpen,
  closeModal,
  customClassName,
  children,
}: IModalContainer) => (
  <Modal
    isOpen={modalIsOpen}
    ariaHideApp={false}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    className={`modal-container ${customClassName}`}
    overlayClassName="modal-container-overlay"
  >
    {children}
  </Modal>
);

export default ModalContainer;
