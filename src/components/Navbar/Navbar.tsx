import { useNavbar } from "./Navbar.hooks";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
  const isMobile = useNavbar();

  return (isMobile ? <NavbarMobile/> : <NavbarDesktop/>)
};
