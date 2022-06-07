import React from "react";
import { AddressSummary } from "../AddressSummary";

import { FormSearch } from "../FormSearch";

import { Container, Title } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <FormSearch />
      <AddressSummary />
    </Container>
  );
};
