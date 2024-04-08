import { scrollToSection } from "helpers/scrollToSection";
import { Button } from "../../atoms/Button";
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
        <Button
          text={`Let's talk`}
          onClick={() => scrollToSection("contact")}
        />
      </HeroSectionIntroduction>
      <SplineModel />
    </HeroSectionWrapper>
  );
};
