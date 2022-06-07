import React from "react";

import { Container, InfosAddressContainer, InfoAddress } from "./styles";

const infoAddress = {
  "IP Address": "192.168.1.1",
  Location: "São Paulo",
  Timezone: "UTC-3",
  ISP: "Tim",
};

export const AddressSummary = () => {
  return (
    <Container>
      <InfosAddressContainer>
        {Object.entries(infoAddress).map(([title, info]) => (
          <InfoAddress key={title}>
            <h3>{title}</h3>
            <strong>{info}</strong>
          </InfoAddress>
        ))}
      </InfosAddressContainer>
    </Container>
  );
};
