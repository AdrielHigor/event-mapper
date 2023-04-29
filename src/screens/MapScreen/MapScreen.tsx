import React, { useEffect, useState } from "react";
import "./MapScreen.css";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/Header";
import { ClickEventValue, Coords } from "google-map-react";
import FirstStepsModal from "../../components/FirstStepsModal/FirstStepsModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import EventFormModal from "../../components/EventFormModal/EventFormModal";
import {
  IEventForm,
  IEventPost,
  IEventResponse,
} from "../../utils/interfaces/base";
import { getAllEvents, postEvent } from "../../api/Event";

function MapScreen() {
  const [userLocation, setUserLocation] = useState<Coords | null>(null);
  const [showFirstSteps, setShowFirstSteps] = useState<boolean>(true);
  const [showEventForm, setShowEventForm] = useState<boolean>(false);
  const [showAddMarkerConfirmation, setShowAddMarkerConfirmation] =
    useState<boolean>(false);
  const [markersPosition, setMarkersPosition] = useState<Array<IEventResponse>>(
    []
  );
  const [selectedPosition, setSelectedPosition] = useState<Coords>();
  const [eventForm, setEventForm] = useState<IEventForm | undefined>();

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

  const getEvents = async () => {
    const events = await getAllEvents();
    setMarkersPosition(events.data);
  };

  const handleMapClick = (event: ClickEventValue) => {
    setShowAddMarkerConfirmation(true);
    setSelectedPosition({ lng: event.lng, lat: event.lat });
  };

  const handleConfirmAddMarker = () => {
    setShowEventForm(true);
    setShowAddMarkerConfirmation(false);
  };

  const handleSaveMarker = async () => {
    if (eventForm && selectedPosition) {
      const objToSave: IEventPost = {
        name: eventForm.name ?? "Default",
        description: eventForm.description ?? "Default",
        startDateTime: eventForm?.startDateTime,
        endDateTime: eventForm?.endDateTime,
        location: {
          lat: selectedPosition.lat,
          lng: selectedPosition.lng,
        },
      };

      await postEvent(objToSave);
      getEvents();
    }

    setEventForm({});
    setShowEventForm(false);
  };

  const handleCancel = () => {
    setEventForm({});
    setShowEventForm(false);
  };

  useEffect(() => {
    getUserLocation();
    getEvents();
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
        title="Cadastrar Evento"
        description="Preencha o formulário abaixo para cadastrar seu evento."
        saveButtonLabel="Salvar"
        cancelButtonLabel="Cancelar"
        form={eventForm}
        requiredFields={["name", "description"]}
        onFormChange={(e) => setEventForm(e)}
        onSave={() => handleSaveMarker()}
        onCancel={() => handleCancel()}
      />
    </div>
  );
}

export default MapScreen;
