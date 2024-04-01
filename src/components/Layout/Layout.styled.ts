import styled from "styled-components";

export const LayoutPositioner = styled.section`
  height: 100dvh;
  width: 100%;
`;

export const LayoutWrapper = styled.div`
  padding: 0 70px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const MainComponent = styled.main`
  height: 100%;
  min-height: 100dvh;
  display: flex;
`;
