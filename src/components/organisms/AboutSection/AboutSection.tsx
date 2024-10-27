import { TimeLine } from "../../molecules/TimeLine";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  AboutSectionWrapper,
  AboutSectionContainer,
} from "./AboutSection.styled";
import { AboutSectionType } from "./AboutSection.type";

export const AboutSection: AboutSectionType = () => {
  return (
    <AboutSectionWrapper id="about">
      <SectionHeader
        sectionTitle="about"
        description="About the person that I have become."
      />
      <AboutSectionContainer>
        <div></div>
        <TimeLine/>
      </AboutSectionContainer>
    </AboutSectionWrapper>
  );
};
