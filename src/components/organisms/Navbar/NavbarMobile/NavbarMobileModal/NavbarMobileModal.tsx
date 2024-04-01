import { SocialMediaLinks } from "../../../../atoms/SocialMediaLinks";
import {
  NavbarWrapper,
  Navbar,
  StyledLink,
  StyledDownloadLink,
} from "./NavbarMobileModal.styled";
import { NavbarMobileModalType } from "./NavbarMobileModal.type";

export const NavbarMobileModal: NavbarMobileModalType = ({
  isNavbarMobileOpen,
}) => (
  <NavbarWrapper visibility={isNavbarMobileOpen}>
    <Navbar>
      <StyledLink to="about">about</StyledLink>
      <StyledLink to="projects">projects</StyledLink>
      <StyledLink to="contact">contact</StyledLink>
      <StyledDownloadLink
        href="pdf/Patrycja_Panasiuk_CV_EN.pdf"
        download="Patrycja_Panasiuk_CV_EN.pdf"
        target="_blank">
        <img src="images/download.png" alt="download" />
        CV
      </StyledDownloadLink>
      <SocialMediaLinks />
    </Navbar>
  </NavbarWrapper>
);
