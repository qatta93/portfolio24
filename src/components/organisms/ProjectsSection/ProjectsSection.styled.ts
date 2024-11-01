import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const ProjectsSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
`;

export const ProjectCardsContainer = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  max-width: ${({ theme }) => theme.maxWidth};
  overflow: hidden;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 350px !important;
  transition: all 0.3s ease;
  opacity: 0.5;
  transform: scale(0.8);
  display: flex;
  justify-content: center;

  &.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100% !important;
    padding: 0 20px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  padding: 20px 0;
  width: calc(100% + 100px);
  margin-left: -50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    opacity: 0.5;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }

  .swiper-pagination {
    width: 100% !important;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 40px 0 40px 0;
  }

  .swiper-pagination-bullet {
    display: block;
    background-color: white;
    opacity: 1;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 10px ${({ theme }) => theme.colors.lightGray};
    border-radius: 20px;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;
