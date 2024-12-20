import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  width: 100%;
  max-width: 700px;
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
    border-top: 2px solid ${({ theme }) => theme.colors.orange};
    width: 60px;
    transform: translateY(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 24px;
  margin: 0 0 0 90px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0 0 20px;
  }
`;

export const SectionDescription = styled.p<{ isContactSection: boolean }>`
  font-weight: medium;
  font-size: 30px;
  margin: 10px 0 0 90px;
  font-family: ${(props) =>
    props.isContactSection
      ? props.theme.fonts.handWritting
      : props.theme.fonts.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 10px 0 0 20px;
    font-size: 20px;
  }
`;
