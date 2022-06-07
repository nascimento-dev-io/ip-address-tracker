import styled from "styled-components";

import backgroundImage from "../../assets/images/pattern-bg.png";

export const Container = styled.header`
  width: 100%;
  height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  font-size: 2.3rem;

  color: #fff;
  margin: 0;
  padding: 18px 0;
`;
