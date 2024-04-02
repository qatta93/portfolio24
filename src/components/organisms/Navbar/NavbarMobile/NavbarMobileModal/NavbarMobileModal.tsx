import {
  NavbarWrapper,
  StyledNavbarLinks,
  StyledSocialMediaLinks,
} from "./NavbarMobileModal.styled";
import { NavbarMobileModalType } from "./NavbarMobileModal.type";

export const NavbarMobileModal: NavbarMobileModalType = ({
  isNavbarMobileOpen,
}) => (
  <NavbarWrapper visibility={isNavbarMobileOpen}>
    <StyledNavbarLinks />
    <StyledSocialMediaLinks />
  </NavbarWrapper>
);
