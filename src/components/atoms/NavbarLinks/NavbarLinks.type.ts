import { ReactElement } from "react";

interface NavbarLinksProps {
  className?: string;
}

interface UseNavbarLinksReturn {
  currentSectionIndex: number;
}

export type NavbarLinksType = (props: NavbarLinksProps) => ReactElement;

export type UseNavbarLinksType = () => UseNavbarLinksReturn;