import styled from "styled-components";

export const Container = styled.form`
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
