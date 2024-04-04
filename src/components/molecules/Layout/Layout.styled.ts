import styled from "styled-components";

export const LayoutPositioner = styled.section`
  height: 100dvh;
  width: 100%;
`;

export const LayoutWrapper = styled.div``;

export const MainComponent = styled.main`
  & > section {
    height: 100%;
    min-height: 100dvh;
    max-width: ${({ theme }) => theme.maxWidth};
    display: flex;
    overflow-x: hidden;

    padding: ${({ theme }) => theme.paddingHorizontal.desktop};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.paddingHorizontal.tablet};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: ${({ theme }) => theme.paddingHorizontal.mobile};
    }
  }
`;
