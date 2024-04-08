import styled from "styled-components";

export const ProjectCardWrapper = styled.section`
  position: relative;
  background-color: white;
  width: 350px;
  height: 550px;
  border-radius: 20px;
  padding: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
  border-radius: 13px;
  background-color: green;
`;

export const ProjectTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const ProjectTechWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectTech = styled.span`
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  margin: 0 5px 5px 0;
  font-size: 14px;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ProjectCardLinks = styled.div`
  position: absolute;
  bottom: 15px;
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
  border-radius: 8px;
  color: white;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${(props) =>
    (props.linkType === "figma" && props.theme.colors.primary) ||
    (props.linkType === "github" && props.theme.colors.primary) ||
    (props.linkType === "live" && props.theme.colors.darkSecondary)};

  &:last-child {
    width: 100%;
    flex: 1;
    border: none;
  }

  & > img {
    height: 25px;
  }
`;
