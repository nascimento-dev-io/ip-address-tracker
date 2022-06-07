import styled, { css } from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;

  position: relative;

  margin: 0 auto;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0 ;
  }
  50% {
    transform: rotate(180deg);
    transform: scale(1.5) rotate(360deg);
    opacity: .5 ;
  }

  100% {
    opacity: 0 ;
    transform: scale(2) rotate(360deg);
  }
`;

export const LoadingCircle = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid var(--primary-dark-gray);

  animation: ${rotate} 2s linear infinite;
  animation-delay: ${(props) => (props.delay ? props.delay : 0)}ms;
`;
