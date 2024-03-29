import {
  HeroSectionIntroduction,
  HeroSectionSubtitle,
  HeroSectionTitle,
  HeroSectionWrapper,
} from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionIntroduction>
        <HeroSectionTitle>
          Hey there!
          <br />
          I am Patrycja.
        </HeroSectionTitle>
        <HeroSectionSubtitle>CREATIVE FRONTEND DEVELOPER</HeroSectionSubtitle>
      </HeroSectionIntroduction>
    </HeroSectionWrapper>
  );
};
