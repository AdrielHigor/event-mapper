import React from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./ConfirmationModal.css";

interface IConfirmationModal {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customClassName?: string;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}

const ConfirmationModal = ({
  modalIsOpen,
  closeModal,
  customClassName,
  title,
  description,
  confirmLabel,
  cancelLabel,
  handleConfirm,
  handleCancel,
}: IConfirmationModal) => (
  <ModalContainer
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
    customClassName={customClassName}
  >
    <div className="confirmation-container">
      <div className="modal-header">
        <h2>{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="options">
        <button className="confirm-button" onClick={handleConfirm}>
          {confirmLabel}
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          {cancelLabel}
        </button>
      </div>
    </div>
  </ModalContainer>
);

export default ConfirmationModal;
