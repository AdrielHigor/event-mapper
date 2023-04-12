import React from "react";
import "./FirstStepsModal.css";
import ModalContainer from "../ModalContainer/ModalContainer";
import { Styles } from "react-modal";

interface IFirstStepsModal {
  modalIsOpen: boolean;
  closeModal: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  customStyles?: Styles;
}

const FirstStepsModal = ({
  modalIsOpen,
  closeModal,
  customStyles,
}: IFirstStepsModal) => (
  <ModalContainer
    modalIsOpen={modalIsOpen}
    closeModal={closeModal}
    customStyles={customStyles}
  >
    <div className="firstSteps">
      <div className="modalHeader">
        <h2>Bem Vindo Ao Mapa! 🗺️</h2>
        <p className="description">
          📌Aqui você pode visualizar e cadastrar eventos em sua cidade ou no
          mundo!
        </p>
      </div>
      <div>
        <p className="description">Como Faço Isso? É fácil!</p>
        <p className="subTitle">Navegar</p>
        <p>1 - Navegue pelo mapa e poderá ver eventos próximos de você.</p>
        <p>2 - basta clicar em um marcador para ver os detalhes dos eventos.</p>
        <p className="subTitle">Criar Evento</p>
        <p>1 - Selecione uma localidade do seu gosto e cadastre seu evento;</p>
        <p>2 - Basta clicar no mapa e um popup com formulário irá aparecer;</p>
        <p>3 - Agora basta você preencher o formulário e postar os eventos.</p>
      </div>
      <button className="exitButton" onClick={closeModal}>
        {" "}
        Entendido!{" "}
      </button>
    </div>
  </ModalContainer>
);

export default FirstStepsModal;
