import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormContainer = styled.article`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 450px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 320px;
  }
`;

export const AnimationContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;
