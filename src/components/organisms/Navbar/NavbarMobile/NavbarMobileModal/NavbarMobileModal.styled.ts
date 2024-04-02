import styled from "styled-components";
import { NavbarLinks } from "../../../../atoms/NavbarLinks";
import { SocialMediaLinks } from "../../../../atoms/SocialMediaLinks";

export const NavbarWrapper = styled.header<{ visibility: any }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100dvh;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background-color: white;
  transition: all 0.5s ease-out;
  transform: ${(props) =>
    props.visibility ? "translateX(0px)" : "translateX(400px)"};
`;

export const StyledNavbarLinks = styled(NavbarLinks)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  font-size: 25px;
`;

export const StyledSocialMediaLinks = styled(SocialMediaLinks)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;
