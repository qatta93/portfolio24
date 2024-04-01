import { useState } from "react";
import { NavbarMobileContainer } from "./NavbarMobile.styled";
import { NavbarMobileModal } from "./NavbarMobileModal";

export const NavbarMobile = () => {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false);
  return (
    <>
      <NavbarMobileContainer>
        <img
          src={isNavbarMobileOpen ? "images/close.png" : "images/menu-bar.png"}
          onClick={() => setIsNavbarMobileOpen(!isNavbarMobileOpen)}
        />
      </NavbarMobileContainer>
      <NavbarMobileModal isNavbarMobileOpen={isNavbarMobileOpen} />
    </>
  );
};
