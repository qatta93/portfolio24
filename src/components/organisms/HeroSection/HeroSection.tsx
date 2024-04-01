import {
  HeroSectionIntroduction,
  HeroSectionSubtitle,
  HeroSectionTitle,
  HeroSectionWrapper,
} from "./HeroSection.styled";
import { SplineModel } from "./SplineModel";

export const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionIntroduction>
        <HeroSectionTitle>
          Hey there!
          <br />I am Patrycja.
        </HeroSectionTitle>
        <HeroSectionSubtitle>CREATIVE FRONTEND DEVELOPER</HeroSectionSubtitle>
      </HeroSectionIntroduction>
      <SplineModel />
    </HeroSectionWrapper>
  );
};
