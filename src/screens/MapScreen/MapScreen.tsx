import React, { useEffect, useState } from "react";
import "./MapScreen.css";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/Header";
import { ClickEventValue, Coords } from "google-map-react";
import FirstStepsModal from "../../components/FirstStepsModal/FirstStepsModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import EventFormModal from "../../components/EventFormModal/EventFormModal";

function MapScreen() {
  const [userLocation, setUserLocation] = useState<Coords | null>(null);
  const [showFirstSteps, setShowFirstSteps] = useState<boolean>(true);
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [showAddMarkerConfirmation, setShowAddMarkerConfirmation] =
    useState<boolean>(false);
  const [markersPosition, setMarkersPosition] = useState<Array<Coords>>([]);
  const [selectedPosition, setSelectedPosition] = useState<Coords>();

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
    setShowAddMarkerConfirmation(true);
    setSelectedPosition({ lng: event.lng, lat: event.lat });
  };

  const handleConfirmAddMarker = () => {
    setShowEventForm(true);
    setShowAddMarkerConfirmation(false);

    // if (selectedPosition) {
    //   setMarkersPosition([
    //     ...markersPosition,
    //     { lng: selectedPosition.lng, lat: selectedPosition.lat },
    //   ]);
    // }
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
      <ConfirmationModal
        modalIsOpen={showAddMarkerConfirmation}
        closeModal={() => setShowAddMarkerConfirmation(false)}
        title="Cadastrar Novo Evento?"
        description="Tem certeza que deseja cadastrar um novo evento na região selecionada?"
        confirmLabel="Confirmar"
        handleConfirm={() => handleConfirmAddMarker()}
        handleCancel={() => setShowAddMarkerConfirmation(false)}
        cancelLabel="Cancelar"
      />
      <EventFormModal
        modalIsOpen={showEventForm}
        closeModal={() => setShowEventForm(false)}
      />
    </div>
  );
}

export default MapScreen;
