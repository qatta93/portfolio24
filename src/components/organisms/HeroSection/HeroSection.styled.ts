import styled, { keyframes } from "styled-components";

export const HeroSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  margin: auto 0;
  max-width: ${({ theme }) => theme.maxWidth};
  align-items: center;
  position: relative;
  flex-direction: column;
  padding: 0 20px;
`;

export const HeroSectionContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-top: 80px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
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
    padding-top: 60px;
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

export const LogosSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  padding: 40px 0;
  margin-bottom: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    gap: 40px;
    flex-wrap: wrap;
    padding: 30px 0;
    margin-bottom: 40px;
  }
`;

export const LogoWrapper = styled.div`
  img {
    height: 24px;
    width: auto;
    filter: grayscale(100%);
    opacity: 0.25;
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 20px;
    }
  }
`;

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

export const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.5;
    animation: ${bounce} 2s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
