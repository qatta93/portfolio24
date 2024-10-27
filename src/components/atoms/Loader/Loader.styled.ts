import styled, { keyframes, css } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
  20% {
    background-position: 0 0, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0 100%, 50% 0, 100% 50%;
  }
  60% {
    background-position: 0 50%, 50% 100%, 100% 0;
  }
  80% {
    background-position: 0 50%, 50% 50%, 100% 100%;
  }
  100% {
    background-position: 0 50%, 50% 50%, 100% 50%;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const LoaderWrapper = styled.div<{ isExiting: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(179, 255, 182);
  z-index: 9999;
  ${({ isExiting }) =>
    isExiting &&
    css`
      animation: ${slideDown} 0.8s ease-in-out forwards;
    `}
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoaderAnimation = styled.div`
  width: 100px;
  height: 40px;
  --g: radial-gradient(
    farthest-side,
    #0000 calc(95% - 3px),
    ${({ theme }) => theme.colors.lightBlack} calc(100% - 3px) 98%,
    #0000 101%
  ) no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: ${loaderAnimation} 1s infinite alternate;
`;

export const LoaderText = styled.p`
  font-family: ${({ theme }) => theme.fonts.handWritting};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightBlack};
  margin: 0;
`;
