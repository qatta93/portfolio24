import styled from "styled-components";

export const AboutSectionWrapper = styled.section`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px !important;
`;

export const AboutSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  margin: 20px 0;
  border-radius: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
