import {
  ProjectCardWrapper,
  ProjectTitle,
  StyledImage,
  ProjectTechWrapper,
  ProjectDescription,
  ProjectTech,
  ProjectCardLinks,
  LinkButton,
} from "./ProjectCard.styled";
import { ProjectCardType } from "./ProjectCard.type";

export const ProjectCard: ProjectCardType = ({
  image,
  title,
  technologies,
  description,
  links,
  isActive,
  onClick,
  ...props
}) => (
  <ProjectCardWrapper onClick={onClick} isActive={isActive} {...props}>
    <StyledImage src={image} />
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTechWrapper>
        {technologies.map((technology: string) => (
          <ProjectTech key={technology}>{technology}</ProjectTech>
        ))}
      </ProjectTechWrapper>
      <ProjectDescription>{description}</ProjectDescription>
    </>
    <ProjectCardLinks>
      {links.map((linkData: object) => {
        const link = Object.values(linkData)[0];
        const linkType = Object.keys(linkData)[0];
        return (
          <LinkButton
            key={link}
            href={link}
            linkType={linkType}
            target="_blank"
            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking links
          >
            {(linkType === "live" && linkType) || (
              <img src={`images/${linkType}.png`} alt={linkType} />
            )}
          </LinkButton>
        );
      })}
    </ProjectCardLinks>
  </ProjectCardWrapper>
);
