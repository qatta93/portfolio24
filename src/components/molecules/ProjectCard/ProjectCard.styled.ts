import styled from "styled-components";

export const ProjectCardWrapper = styled.section<{ isActive?: boolean }>`
  position: relative;
  background-color: white;
  width: 350px;
  height: 520px;
  border-radius: 20px;
  padding: 10px;
  box-shadow: ${({ theme }) => `${theme.colors.shadow} 0px 8px 24px`};
  transition: all 0.3s ease;
  cursor: pointer;
  transform-origin: center;

  &:hover {
    transform: ${({ isActive }) => !isActive && "translateY(-5px)"};
  }

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateY(-10px) scale(1.05);
    z-index: 1;
    `}
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 240px;
  border-radius: 13px;
  background-color: green;
`;

export const ProjectTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const ProjectTechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectTech = styled.span`
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
  border-radius: 5px;
  margin: 0 5px 5px 0;
  font-size: 12px;
`;

export const ProjectDescription = styled.p`
  margin-top: 7px;
  font-size: 13px;
`;

export const ProjectCardLinks = styled.div`
  position: absolute;
  bottom: 12px;
  right: 10px;
  left: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const LinkButton = styled.a<{ linkType: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  min-height: 43px;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.handWritting};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${(props) =>
    props.linkType === "live" && props.theme.colors.darkSecondary};

  &:hover {
    scale: 1.02;
  }

  &:last-child {
    width: 100%;
    flex: 1;
    border: none;
  }

  & > img {
    height: 25px;
  }
`;
