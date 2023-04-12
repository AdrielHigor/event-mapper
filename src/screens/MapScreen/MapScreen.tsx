import React, { useEffect, useState } from "react";
import "./MapScreen.css";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/Header";
import { ClickEventValue, Coords } from "google-map-react";
import FirstStepsModal from "../../components/FirstStepsModal/FirstStepsModal";

function MapScreen() {
  const [userLocation, setUserLocation] = useState<Coords | null>(null);
  const [showFirstSteps, setShowFirstSteps] = useState<boolean>(true);
  const [markersPosition, setMarkersPosition] = useState<Array<Coords>>([]);

  const getUserLocation = () => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location)
          setUserLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
      });
    }
  };

  const handleMapClick = (event: ClickEventValue) => {
    setMarkersPosition([
      ...markersPosition,
      { lng: event.lng, lat: event.lat },
    ]);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="app">
      <Header onHelpClick={() => setShowFirstSteps(true)} />
      {userLocation ? (
        <Map
          handleMapClick={(event) => handleMapClick(event)}
          location={userLocation}
          zoomLevel={15}
          markers={markersPosition}
        />
      ) : null}
      <FirstStepsModal
        modalIsOpen={showFirstSteps}
        closeModal={() => setShowFirstSteps(false)}
      />
    </div>
  );
}

export default MapScreen;
