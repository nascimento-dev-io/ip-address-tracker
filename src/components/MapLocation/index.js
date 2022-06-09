import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { IPTrackContext } from "../../contexts/TrackContext";

import iconLocation from "../../assets/images/icon-location.svg";

import { Container } from "./styles";

function UpdateMapCenter(props) {
  const map = useMap();
  map.panTo(props.mapCenter);
  return null;
}

export const MapLocation = () => {
  const { coordinates, infosTrack } = useContext(IPTrackContext);

  console.log(iconLocation);
  return (
    <Container>
      <MapContainer
        center={[40.712776, -74.005974]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "70vh", zIndex: -1 }}
      >
        <UpdateMapCenter mapCenter={coordinates} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            Localidade: {infosTrack.location} <br />
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
