import React, { useContext, useState } from "react";

import { IPTrackSummary } from "../IPTrackSummary";

import { Container, Title, FormSearch } from "./styles";

import iconButton from "../../assets/images/icon-arrow.svg";
import { IPTrackContext } from "../../contexts/TrackContext";

export const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { infosTrack, getIpTrackInfo } = useContext(IPTrackContext);

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
          required
        />
        <button type="submit">
          <img src={iconButton} alt="search button" />
        </button>
      </FormSearch>
      <IPTrackSummary infosTrack={infosTrack} />
    </Container>
  );
};
