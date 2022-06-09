import React, { useContext } from "react";

import { Container, InfosAddressContainer, InfoAddress } from "./styles";

import { Loading } from "../Loading";
import { IPTrackContext } from "../../contexts/TrackContext";

export const IPTrackSummary = () => {
  const { infosTrack, loading } = useContext(IPTrackContext);

  return (
    <>
      <Container>
        <InfosAddressContainer>
          {loading ? (
            <Loading />
          ) : (
            Object.entries(infosTrack).map(([title, info]) => (
              <InfoAddress key={title}>
                <h3>{title}</h3>
                <strong>{info}</strong>
              </InfoAddress>
            ))
          )}
        </InfosAddressContainer>
      </Container>
    </>
  );
};
