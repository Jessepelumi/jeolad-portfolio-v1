import { keyframes } from "styled-components";
import styled from "styled-components";

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const StyledSplashScreen = styled.section`
  height: 100vh;
  position: fixed;
  z-index: 2000;
  width: 100%;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  visibility: hidden;
  transition: 0.5s linear;

  &.visible {
    visibility: visible;
    top: 0;
  }

  &.show {
    animation: ${slideOut} 0.5s linear;
  }

  .progress-bar {
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 5px;
    background-color: var(--gray);
    transition: width 30s ease;

    .progress {
      height: 100%;
      width: ${({ progress }) => progress}%;
      background-color: var(--purple);
    }
  }

  span {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: var(--purple);
  }
`;
