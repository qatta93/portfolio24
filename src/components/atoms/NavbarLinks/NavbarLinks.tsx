import { scrollToSection } from "helpers/scrollToSection";
import { Navbar, StyledButton, StyledDownloadLink } from "./NavbarLinks.styled";
import { NavbarLinksType } from "./NavbarLinks.type";
import { useNavbarLink } from "./NavbarLinks.hook";

export const NavbarLinks: NavbarLinksType = ({ className }) => {
  const { currentSectionIndex } = useNavbarLink();

  return (
    <Navbar
      className={className ? className : ""}
      activeSection={currentSectionIndex}>
      <StyledButton onClick={() => scrollToSection("about")}>
        about
      </StyledButton>
      <StyledButton onClick={() => scrollToSection("projects")}>
        projects
      </StyledButton>
      <StyledButton onClick={() => scrollToSection("contact")}>
        contact
      </StyledButton>
      <StyledDownloadLink
        href="/pdf/Panasiuk_Patrycja_CV_EN.pdf"
        download="Panasiuk_Patrycja_CV_EN.pdf"
        target="_blank">
        <img src="/images/download.png" alt="download" />
        CV
      </StyledDownloadLink>
    </Navbar>
  );
};
