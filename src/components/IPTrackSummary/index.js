import React from "react";
import { useTrack } from "../../hooks/useTrack";

import {
  Container,
  ErrorMessage,
  InfosAddressContainer,
  InfoAddress,
} from "./styles";

import { Loading } from "../Loading";

export const IPTrackSummary = () => {
  const { infosTrack, loading, error } = useTrack();

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
