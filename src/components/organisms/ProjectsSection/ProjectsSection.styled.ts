import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const ProjectsSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: column;
`;

export const ProjectCardsContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  max-width: ${({ theme }) => theme.maxWidth};
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 350px !important;
`;

export const StyledSwiper = styled(Swiper)`
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.99),
    98%,
    rgba(0, 0, 0, 0)
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.99),
    98%,
    rgba(0, 0, 0, 0)
  );

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
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 20px;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.violet};
  }
`;
