import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";

interface IMap {
  location: GoogleMapReact.Coords;
  zoomLevel: number;
  handleMapClick?: (event: GoogleMapReact.ClickEventValue) => void;
  markers?: Array<GoogleMapReact.Coords>;
}

const Map = ({ location, zoomLevel, handleMapClick, markers }: IMap) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onClick={handleMapClick}
      ></GoogleMapReact>
    </div>
  </div>
);

export default Map;
