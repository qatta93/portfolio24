import {
  Navbar,
  StyledLink,
  StyledDownloadLink,
} from "./NavbarLinks.styled";
import { NavbarLinksType } from "./NavbarLinks.type";

export const NavbarLinks: NavbarLinksType = ({ className }) => {
  return (
    <Navbar className={className ? className : ''}>
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
    </Navbar>
  );
};
