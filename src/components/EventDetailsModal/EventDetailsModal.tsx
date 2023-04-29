import React from "react";
import "./EventDetailsModal.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import { IEventResponse } from "../../utils/interfaces/base";

interface IEventDetailsModal {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customClassName?: string;
  event?: IEventResponse;
  onDelete: (id: number) => void;
}

const EventDetailsModal = ({
  modalIsOpen,
  closeModal,
  customClassName,
  event,
  onDelete,
}: IEventDetailsModal) => {
  const formatDateTime = (date: string) => {
    console.log(date);
    const dateObj = new Date(date);

    return `${dateObj.getDate().toString().padStart(2, "0")}/${(
      dateObj.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear()} às ${dateObj
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${dateObj.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <ModalContainer
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      customClassName={customClassName}
    >
      <div className="first-steps">
        <div className="modal-header">
          <h2>{event?.name}</h2>
          <p className="description">{event?.description}</p>
        </div>
        <div>
          {event?.startDateTime && (
            <div>
              <p className="sub-title">Data e Hora Inicial</p>
              <p>{formatDateTime(event.startDateTime)}</p>
            </div>
          )}
          {event?.endDateTime && (
            <div>
              <p className="sub-title">Data e Hora Final</p>
              <p>{formatDateTime(event.endDateTime)}</p>
            </div>
          )}
        </div>
        <div className="options">
          <button className="confirm-button" onClick={closeModal}>
            Concluir!
          </button>
          <button
            className="cancel-button"
            onClick={(e) => (event ? onDelete(event.id) : closeModal(e))}
          >
            Deletar
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default EventDetailsModal;
