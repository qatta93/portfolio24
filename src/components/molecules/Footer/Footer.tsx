import {
  FooterWrapper,
  FooterElements,
  StyledSocialMediaLinks,
  StyledNavbarLinks,
  Author,
} from "./Footer.styled.";

export const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterElements>
        <StyledSocialMediaLinks />
        <StyledNavbarLinks />
        <Author>
          ©{year} Patrycja Panasiuk | All Rights Reserved
        </Author>
      </FooterElements>
    </FooterWrapper>
  );
};
