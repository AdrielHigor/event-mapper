import React from "react";
import "./ModalContainer.css";
import Modal from "react-modal";

const defaultStyle: Modal.Styles = {
  content: {
    width: "500px",
    height: "400px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

interface IModalContainer {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customStyles?: Modal.Styles;
  children: React.ReactNode;
}

const ModalContainer = ({
  modalIsOpen,
  closeModal,
  customStyles,
  children,
}: IModalContainer) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles || defaultStyle}
    contentLabel="Example Modal"
  >
    {children}
  </Modal>
);

export default ModalContainer;
