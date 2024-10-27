import { ProjectCard } from "../../molecules/ProjectCard";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  ProjectsSectionWrapper,
  ProjectCardsContainer,
  StyledSwiperSlide,
  StyledSwiper,
} from "./ProjectsSection.styled";
import { ProjectsSectionType } from "./ProjectsSection.type";
import projects from "./projects.json";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";

export const ProjectsSection: ProjectsSectionType = () => {
  return (
    <ProjectsSectionWrapper id="projects">
      <SectionHeader
        sectionTitle="projects"
        description="Some things that I've been working on."
      />
      <ProjectCardsContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={"auto"}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          scrollbar={{ draggable: true }}>
          {projects.map(({ title, technologies, img, links, description }) => (
            <StyledSwiperSlide>
              <ProjectCard
                key={title}
                title={title}
                image={img}
                links={links}
                technologies={technologies}
                description={description}
              />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </ProjectCardsContainer>
    </ProjectsSectionWrapper>
  );
};
