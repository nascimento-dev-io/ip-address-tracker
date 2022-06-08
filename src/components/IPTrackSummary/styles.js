import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 70%;

  margin-top: 40px;
  border: 1px solid #5977df;
  background-color: white;

  padding: 20px 30px;

  border-radius: 18px;
`;

const fadeOut = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0 ;
  }
  25% {
    transform: rotate(0deg);
    opacity: 1 ;
  }

  50% {
    transform: rotate(0deg);
    opacity: 1 ;
  }

  100% {
    opacity: 0;
  }
`;

export const ErrorMessage = styled.div`
  width: 70%;

  margin-top: 10px;
  border: 1px solid #d33737;
  background-color: #f96666;

  opacity: 0.8;
  color: white;

  font-size: 1.5rem;
  text-align: center;

  padding: 20px 30px;

  border-radius: 18px;

  animation: ${fadeOut} 3s forwards;
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
