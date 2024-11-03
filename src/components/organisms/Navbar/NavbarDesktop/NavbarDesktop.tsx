import { NavbarLinks } from "../../../atoms/NavbarLinks";
import { NavbarDesktopWrapper, Logo } from "./NavbarDesktop.styled";
import { useEffect, useState } from "react";

export const NavbarDesktop = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setVisible(isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <NavbarDesktopWrapper $visible={visible}>
      <Logo src="/images/logo.png" alt="Logo" />
      <NavbarLinks />
    </NavbarDesktopWrapper>
  );
};
