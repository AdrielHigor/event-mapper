import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";
import constants from "../../utils/Constants";
import { IEventResponse } from "../../utils/interfaces/base";

export interface IMap {
  location: GoogleMapReact.Coords;
  zoomLevel: number;
  handleMapClick?: (event: GoogleMapReact.ClickEventValue) => void;
  markers?: Array<IEventResponse>;
  handleMarkerClick: (event: IEventResponse) => void;
}

const Map = ({
  location,
  zoomLevel,
  handleMapClick,
  handleMarkerClick,
  markers,
}: IMap) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: constants.google_maps_api_key }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onClick={handleMapClick}
      >
        {markers?.map((marker) => (
          <Marker
            key={marker.id}
            lat={marker.location.point.coordinates[1]}
            lng={marker.location.point.coordinates[0]}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
