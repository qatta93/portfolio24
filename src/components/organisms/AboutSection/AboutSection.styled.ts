import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const AboutSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
