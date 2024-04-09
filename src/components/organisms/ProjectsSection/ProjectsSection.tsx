import { SectionHeader } from "../../atoms/SectionHeader";
import { ProjectsSectionWrapper } from "./ProjectsSection.styled";
import { ProjectsSectionType } from "./ProjectsSection.type";

export const ProjectsSection: ProjectsSectionType = () => {
  return (
    <ProjectsSectionWrapper id="projects">
      <SectionHeader
        sectionTitle="projects"
        description="Some things that I've been working on."
      />
    </ProjectsSectionWrapper>
  );
};
