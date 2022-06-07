import React, { useState } from "react";

import { IPTrackSummary } from "../IPTrackSummary";

import { Container, Title, FormSearch } from "./styles";

import iconButton from "../../assets/images/icon-arrow.svg";
import { useTrack } from "../../hooks/useTrack";

export const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { infosTrack, getIpTrackInfo } = useTrack();

  const handleSubmit = (e) => {
    e.preventDefault();
    getIpTrackInfo(inputSearch);
  };

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <FormSearch onSubmit={handleSubmit}>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit">
          <img src={iconButton} alt="search button" />
        </button>
      </FormSearch>
      <IPTrackSummary infosTrack={infosTrack} />
    </Container>
  );
};
