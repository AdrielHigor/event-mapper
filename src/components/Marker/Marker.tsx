import React from "react";
import "./Marker.css";

export interface IMarker {
  lat: number;
  lng: number;
  onClick: () => void;
}

const Marker = ({ lat, lng, onClick }: IMarker) => (
  <img
    key={`${lat}${lng}`}
    src={require("../../res/images/location-marker.png")}
    alt="Location Marker"
    className="marker"
    onClick={onClick}
  />
);

export default Marker;
