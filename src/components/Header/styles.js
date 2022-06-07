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

export const FormSearch = styled.form`
  max-width: 420px;
  width: 80%;

  display: flex;
  input,
  button {
    padding: 15px;
    font-size: 14px;

    color: var(--primary-dark-gray);
  }

  input {
    flex: 1;
    border-radius: 8px 0 0 8px;

    outline: none;
    border: none;
  }

  input::placeholder {
    opacity: 0.8;
  }

  button {
    border-radius: 0 8px 8px 0;
    border: none;

    background-color: var(--primary-dark-gray);

    cursor: pointer;

    transition: all 500ms;

    &:active {
      transform: scale(0.95);
    }
  }

  button img {
    width: 8px;
  }
`;
