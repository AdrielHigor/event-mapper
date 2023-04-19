import React from "react";
import './Marker.css'

interface IMarker {
  lat: number;
  lng: number;
}

const Marker = ({ lat, lng }: IMarker) => (
  <img
    key={`${lat}${lng}`}
    src={require("../../res/images/location-marker.png")}
    alt="Location Marker"
    className="marker"
  />
);

export default Marker;
