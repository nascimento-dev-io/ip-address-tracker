import iconButton from "../../assets/images/icon-arrow.svg";

import { Container } from "./styles";

export const FormSearch = () => {
  return (
    <Container>
      <input type="text" placeholder="Search for any IP address or domain" />
      <button type="submit">
        <img src={iconButton} alt="search button" />
      </button>
    </Container>
  );
};
