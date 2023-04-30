import React, { useState } from "react";
import "./EventFormModal.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import FormInput from "../FormTextInput/FormInput";
import {
  DynamicObject,
  IEventForm,
  IEventFormValidation,
} from "../../utils/interfaces/base";

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
  requiredFields?: Array<string>;
  onFormChange: (e: IEventForm) => void;
  onSave: () => void;
  onCancel: () => void;
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
  requiredFields,
  onFormChange,
  onSave,
  onCancel,
}: IEventFormModal) => {
  const [formValidFields, setFormValidFields] = useState<IEventFormValidation>({
    name: true,
    description: true,
    startDateTime: true,
    endDateTime: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedObj: DynamicObject = { ...form };
    updatedObj[e.target.id] = e.target.value;
    onFormChange(updatedObj);
  };

  const handleSave = (validatedFields: DynamicObject) => {
    let field;

    for (field in validatedFields) {
      if (validatedFields[field] === false) return;
    }

    onSave();
  };

  const handleValidation = () => {
    const validatedFields: DynamicObject = { ...formValidFields };
    const formObj: DynamicObject = { ...form };
    if (requiredFields) {
      requiredFields.forEach((field) => {
        if (!formObj[field] || formObj[field] === "") {
          validatedFields[field] = false;
        } else {
          validatedFields[field] = true;
        }
      });

      setFormValidFields(validatedFields);
    }

    handleSave(validatedFields);
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
          <FormInput
            onChange={handleChange}
            id="name"
            label="Nome do evento *"
            isValid={formValidFields["name"]}
          />
          <FormInput
            onChange={handleChange}
            id="description"
            label="Descrição do evento *"
            isValid={formValidFields["description"]}
          />
          <FormInput
            onChange={handleChange}
            id="startDateTime"
            label="Data de início do evento"
            inputType="datetime-local"
            isValid={formValidFields["startDateTime"]}
          />
          <FormInput
            onChange={handleChange}
            id="endDateTime"
            label="Data de fim do evento"
            inputType="datetime-local"
            isValid={formValidFields["endDateTime"]}
          />
        </div>
        <div className="options">
          <button className="confirm-button" onClick={handleValidation}>
            {saveButtonLabel}
          </button>
          <button className="cancel-button" onClick={onCancel}>
            {cancelButtonLabel}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EventFormModal;
