import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  & > span {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 2px solid ${({ theme }) => theme.colors.violet};
    width: 60px;
    transform: translateY(-50%);
  }
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.violet};
  font-size: 24px;
  margin: 0 0 0 90px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const SectionDescription = styled.p<{ isContactSection: boolean }>`
  font-weight: medium;
  font-size: 40px;
  margin: 10px 0 0 90px;
  /* TODO - change this style on proper one */
  color: ${(props) =>
    props.isContactSection ? "red" : "black"};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }
`;