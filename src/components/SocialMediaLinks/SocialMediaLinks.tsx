import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { SocialLink, SocialLinksWrapper } from "./SocialMediaLinks.styled";
import { SocialMediaLinksType } from "./SocialMediaLinks.type";

export const SocialMediaLinks: SocialMediaLinksType = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink
        to="https://www.linkedin.com/in/patrycjapanasiuk/"
        target="_blank">
        <img src="images/linkedin.png" alt="linkedin" />
      </SocialLink>
      <SocialLink to="https://www.instagram.com/__qatta/" target="_blank">
        <img src="images/instagram.png" alt="instagram" />
      </SocialLink>
      <SocialLink to="https://github.com/qatta93" target="_blank">
        <img src="images/github.png" alt="github" />
      </SocialLink>
      <SocialLink
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:panasiuk.patrycja@gmail.com";
          e.preventDefault();
        }}>
        <img src="images/mail.png" alt="email" />
      </SocialLink>
    </SocialLinksWrapper>
  );
};
