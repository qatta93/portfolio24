import { ProjectCard } from "../../molecules/ProjectCard";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  ProjectsSectionWrapper,
  ProjectCardsContainer,
  StyledSwiperSlide,
  StyledSwiper,
  OverviewContainer,
} from "./ProjectsSection.styled";
import { ProjectsSectionType } from "./ProjectsSection.type";
import projects from "./projects.json";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  const [slidesPerView, setSlidesPerView] = useState<number | "auto">("auto");
  const [initialSlide, setInitialSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(theme.breakpoints.mobile)) {
        setSlidesPerView(1);
        setInitialSlide(0);
      } else {
        setSlidesPerView("auto");
        setInitialSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.mobile]);

  return (
    <ProjectsSectionWrapper id="projects">
      <SectionHeader
        sectionTitle="projects"
        description="Some things that I've been working on."
      />
      <OverviewContainer>
        <p>
          I leverage <span>AI tools</span> to build applications with{" "}
          <span>React</span> and <span>Next.js</span>. I use{" "}
          <span>TypeScript</span> for type safety and <span>Tailwind</span> for
          styling. My experience includes <span>Three.js</span> for 3D graphics,{" "}
          <span>Figma</span> for design and <span>Wordpress</span>. I also have
          basic knowledge of backend technologies, including{" "}
          <span>Next Auth</span>, <span>Node.js</span>, and <span>Prisma</span>{" "}
          or <span>SQL</span>.
        </p>
      </OverviewContainer>
      <ProjectCardsContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          initialSlide={initialSlide}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          scrollbar={{ draggable: true }}>
          {projects.map(({ title, technologies, img, links, description }) => (
            <StyledSwiperSlide key={title}>
              <ProjectCard
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
