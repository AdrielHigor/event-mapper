import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";

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
        bootstrapURLKeys={{ key: "AIzaSyBPLYwP37lSvepHaSU4A25UhHlSuvbXdqg" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onClick={handleMapClick}
      >
        {markers?.map((marker) => (
          <Marker
            key={`${marker.lat}${marker.lng}`}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
