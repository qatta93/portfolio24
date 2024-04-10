import { SectionHeader } from "../../atoms/SectionHeader";
import {
  AboutSectionWrapper,
  AboutSectionContainer,
} from "./AboutSection.styled";
import { AboutSectionType } from "./AboutSection.type";

export const AboutSection: AboutSectionType = () => {
  return (
    <AboutSectionWrapper id="about">
      <AboutSectionContainer>
        <SectionHeader
          sectionTitle="about"
          description="About the person that I have become."
        />
      </AboutSectionContainer>
    </AboutSectionWrapper>
  );
};
