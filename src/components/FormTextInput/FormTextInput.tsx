import React from "react";
import "./FormTextInput.css";

interface IFormTextInput {
  inputMode?:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
  label: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormTextInput = ({ inputMode, label, id, onChange }: IFormTextInput) => (
  <div className="input-container">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      onChange={onChange}
      id={id}
      className="form-input"
      inputMode={inputMode}
    ></input>
  </div>
);

export default FormTextInput;
