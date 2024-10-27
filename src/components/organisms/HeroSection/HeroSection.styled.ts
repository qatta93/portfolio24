import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  margin: auto 0;
  max-width: ${({ theme }) => theme.maxWidth};
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroSectionIntroduction = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    padding-top: 100px;
  }
`;

export const HeroSectionTitle = styled.h1`
  font-size: 64px;
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: medium;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

interface VisibilityProps {
  $visible: boolean;
}

export const HeroSectionSubtitle = styled.h2<VisibilityProps>`
  font-size: 18px;
  font-weight: lighter;
  margin-bottom: 50px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-out;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AnimatedButton = styled.div<VisibilityProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
`;
