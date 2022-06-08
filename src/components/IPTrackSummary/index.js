import React, { useContext } from "react";

import {
  Container,
  ErrorMessage,
  InfosAddressContainer,
  InfoAddress,
} from "./styles";

import { Loading } from "../Loading";
import { IPTrackContext } from "../../contexts/TrackContext";

export const IPTrackSummary = () => {
  const { infosTrack, loading, error } = useContext(IPTrackContext);

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
      {error && <ErrorMessage>IP ou Domínio informado é inválido</ErrorMessage>}
    </>
  );
};
