import { ProjectCard } from "../../molecules/ProjectCard";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  ProjectsSectionWrapper,
  ProjectCardsContainer,
  StyledSwiperSlide,
  StyledSwiper,
  OverviewContainer,
  TechnologiesContainer,
  TechnologyItem,
  ProjectsIntro,
} from "./ProjectsSection.styled";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useTheme } from "styled-components";
import { useEffect, useState, useRef } from "react";
import BallCanvas from "../../atoms/Canvas/Ball";
import { TECHNOLOGIES, PROJECTS } from "../../../constants/index";
import { Swiper } from "swiper";

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  const [slidesPerView, setSlidesPerView] = useState<number | "auto">("auto");
  const [initialSlide, setInitialSlide] = useState(2);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(theme.breakpoints.mobile)) {
        setSlidesPerView(1);
        setInitialSlide(2);
      }
      if (window.innerWidth <= parseInt(theme.breakpoints.tablet)) {
        setSlidesPerView(2);
        setInitialSlide(2);
      } else {
        setSlidesPerView("auto");
        setInitialSlide(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.mobile]);

  const handleCardClick = (index: number) => {
    if (activeCardIndex === index) {
      setActiveCardIndex(null);
    } else {
      setActiveCardIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index, 300);
      }
    }
  };

  return (
    <ProjectsSectionWrapper id="projects">
      <ProjectsIntro>
        <SectionHeader
          sectionTitle="projects"
          description="Some things that I've been working on."
        />
        <OverviewContainer>
          <p>
            I leverage <span>AI tools</span> to build applications with{" "}
            <span>React</span> and <span>Next.js</span>. I use{" "}
            <span>TypeScript</span> for type safety and <span>Tailwind</span>{" "}
            for styling. My experience includes <span>Three.js</span> for 3D
            graphics, <span>Figma</span> for design and <span>Wordpress</span>.
            I also have basic knowledge of backend technologies and databases,
            including <span>Next Auth</span>, <span>Node.js</span>, and{" "}
            <span>Prisma</span> or <span>SQL</span>.
          </p>
        </OverviewContainer>
        <TechnologiesContainer>
          {TECHNOLOGIES.map((technology) => (
            <TechnologyItem key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </TechnologyItem>
          ))}
        </TechnologiesContainer>
      </ProjectsIntro>
      <ProjectCardsContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          initialSlide={initialSlide}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          scrollbar={{ draggable: true }}>
          {PROJECTS.map(
            ({ title, technologies, img, links, description }, index) => (
              <StyledSwiperSlide key={title}>
                <ProjectCard
                  title={title}
                  image={img}
                  links={links}
                  technologies={technologies}
                  description={description}
                  isActive={activeCardIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              </StyledSwiperSlide>
            )
          )}
        </StyledSwiper>
      </ProjectCardsContainer>
    </ProjectsSectionWrapper>
  );
};
