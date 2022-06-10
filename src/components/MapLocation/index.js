import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

import { IPTrackContext } from "../../contexts/TrackContext";

import { Container, ErrorMessage } from "./styles";

const myIcon = (_iconSize) => {
  return L.icon({
    iconUrl: require("../../assets/images/icon-location.png"),
    iconSize: _iconSize,
  });
};

function UpdateMapCenter(props) {
  const map = useMap();
  map.flyTo(props.mapCenter);
  return null;
}

export const MapLocation = () => {
  const { coordinates, infosTrack, error } = useContext(IPTrackContext);

  return (
    <Container>
      <MapContainer
        center={[-23.55052, -46.633308]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "70vh" }}
      >
        <UpdateMapCenter mapCenter={coordinates} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates} icon={myIcon([30, 30])}>
          <Popup>
            Localidade: {infosTrack.location} <br />
          </Popup>
        </Marker>
      </MapContainer>
      {error && (
        <ErrorMessage>Error: Check the IP or domain entered </ErrorMessage>
      )}
    </Container>
  );
};
