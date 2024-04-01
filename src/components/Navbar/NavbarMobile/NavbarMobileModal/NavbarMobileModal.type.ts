import { ReactElement } from "react";

interface NavbarMobileModalProps {
  isNavbarMobileOpen: boolean;
}

export type NavbarMobileModalType = (props: NavbarMobileModalProps) => ReactElement;
