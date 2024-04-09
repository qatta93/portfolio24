import styled from "styled-components";
import { NavbarLinks } from "../../atoms/NavbarLinks";
import { SocialMediaLinks } from "../../atoms/SocialMediaLinks";

export const FooterWrapper = styled.footer`
  position: relative;
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("images/footer-bcg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterElements = styled.div`
  margin-top: 100px;
  z-index: 10;
`;

export const StyledSocialMediaLinks = styled(SocialMediaLinks)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledNavbarLinks = styled(NavbarLinks)`
  margin-top: 20px;
  font-size: 14px;
  gap: 40px;

  & > button {
    text-decoration: none!important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 30px;
    font-size: 12px;
  }
`;

export const Author = styled.p`
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
`;
