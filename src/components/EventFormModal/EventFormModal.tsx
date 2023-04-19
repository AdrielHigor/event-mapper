import React from "react";
import "./EventFormModal.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import FormTextInput from "../FormTextInput/FormTextInput";
import { IEventForm } from "../../utils/interfaces/base";

interface IEventFormModal {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customClassName?: string;
  title: string;
  description: string;
  saveButtonLabel: string;
  cancelButtonLabel: string;
  form?: IEventForm;
  onFormChange: (e: IEventForm) => void;
}

const EventFormModal = ({
  modalIsOpen,
  closeModal,
  customClassName,
  title,
  description,
  saveButtonLabel,
  cancelButtonLabel,
  form,
  onFormChange,
}: IEventFormModal) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedObj = { ...form };

    console.log(e.target.id);
    console.log(e.target.value);

    onFormChange(updatedObj);
  };

  return (
    <ModalContainer
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      customClassName={customClassName}
    >
      <div className="event-form">
        <div className="modal-header">
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="form">
          <FormTextInput
            onChange={handleChange}
            id="eventName"
            label="Nome do evento"
          />
          <FormTextInput
            onChange={handleChange}
            id="eventDescription"
            label="Descrição do evento"
          />
          <FormTextInput
            onChange={handleChange}
            id="eventStartDate"
            label="Data de início do evento"
          />
          <FormTextInput
            onChange={handleChange}
            id="eventEndDate"
            label="Data de fim do evento"
          />
        </div>
        <div className="options">
          <button className="confirm-button" onClick={closeModal}>
            {saveButtonLabel}
          </button>
          <button className="cancel-button" onClick={closeModal}>
            {cancelButtonLabel}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EventFormModal;
