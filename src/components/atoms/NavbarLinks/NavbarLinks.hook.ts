import { useEffect, useState } from "react";
import { UseNavbarLinksType } from "./NavbarLinks.type";

export const useNavbarLink: UseNavbarLinksType = () => {
    const windowHeight = window.innerHeight;
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const currentSectionIndex = Math.round(scrollPosition / windowHeight);

    return { currentSectionIndex };
}