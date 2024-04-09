import { SectionHeader } from "../../atoms/SectionHeader";
import {
  AboutSectionWrapper,
} from "./AboutSection.styled";
import { AboutSectionType } from "./AboutSection.type";

export const AboutSection: AboutSectionType = () => {
  return (
    <AboutSectionWrapper id="about">
        <SectionHeader
          sectionTitle="about"
          description="About the person that I have become."
        />
    </AboutSectionWrapper>
  );
};
