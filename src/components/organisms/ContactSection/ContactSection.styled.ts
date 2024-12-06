import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 50px;
  }
`;

export const FormContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 100px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 10px auto 30px;
  }
`;

export const AnimationContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 500px;
    padding: 40px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
