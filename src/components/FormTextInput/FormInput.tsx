import React from "react";
import "./FormInput.css";

interface IFormTextInput {
  label: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  inputType?: React.HTMLInputTypeAttribute | undefined;
  isValid?: boolean;
}

const FormInput = ({
  inputType,
  label,
  id,
  isValid,
  onChange,
}: IFormTextInput) => (
  <div className="input-container">
    <label
      htmlFor={id}
      className={`form-label ${!isValid && "form-label-error"}`}
    >
      {label}
    </label>
    <input
      onChange={onChange}
      id={id}
      className={`form-input ${!isValid && "form-input-error"}`}
      type={inputType}
    ></input>
    {!isValid && <p className="form-error-text">Este campo é obrigatório!</p>}
  </div>
);

export default FormInput;
