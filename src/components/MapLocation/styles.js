import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.main`
  height: 70vh;
`;

const fadeInOut = keyframes`
  0% {
    bottom: 0;
    opacity: .5 ;
  }

  50% {
    bottom: 30px;
    opacity: 1 ;
  }
  75% {
    bottom: 30px;
    opacity: 1 ;
  }

  100% {
    bottom:0;
    opacity: 0;
    visibility: hidden;
  }
`;

export const ErrorMessage = styled.div`
  width: 70%;

  border: 1px solid #d33737;
  background-color: #f96666;

  opacity: 0.8;
  color: white;

  font-size: 1.5rem;
  text-align: center;

  position: absolute;
  left: 50%;

  transform: translateX(-50%);

  padding: 20px 30px;

  border-radius: 18px;

  animation: ${fadeInOut} 2s linear forwards;

  z-index: 1000;
`;
