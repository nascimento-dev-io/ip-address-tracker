import React from "react";

import { Container, LoadingCircle } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <LoadingCircle />
      <LoadingCircle delay={1000} />
    </Container>
  );
};
