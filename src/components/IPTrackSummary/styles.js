import styled from "styled-components";

export const Container = styled.div`
  width: 70%;

  border: 1px solid #5977df;
  background-color: white;

  padding: 30px;
  border-radius: 18px;

  position: absolute;
  top: 150px;

  z-index: 1000;
`;

export const InfosAddressContainer = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InfoAddress = styled.li`
  width: 200px;
  height: auto;

  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 5px 0;
  }

  h3 {
    color: var(--secondary-dark-gray);
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  strong {
    font-size: 2.2rem;

    font-weight: 700;

    color: var(--primary-dark-gray);
  }
`;
