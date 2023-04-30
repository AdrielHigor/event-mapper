import React from "react";
import "./Header.css";

export interface IHeader {
  onHelpClick?: () => void;
}

const Header = ({ onHelpClick }: IHeader) => (
  <div className="header">
    <h2 className="header-h2">Event Mapper</h2>
    <div className="help-button" onClick={onHelpClick}>
      <span>Ajuda</span>
    </div>
  </div>
);

export default Header;
