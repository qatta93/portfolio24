import { Navbar } from "../../organisms/Navbar";
import { Footer } from "../Footer";
import CursorGradient from "../../atoms/CursorGradient";

import {
  LayoutPositioner,
  LayoutWrapper,
  MainComponent,
} from "./Layout.styled";
import { LayoutType } from "./Layout.type";

export const Layout: LayoutType = ({ children }) => {
  return (
    <LayoutPositioner>
      <CursorGradient />
      <LayoutWrapper>
        <Navbar />
        <MainComponent>{children}</MainComponent>
        <Footer />
      </LayoutWrapper>
    </LayoutPositioner>
  );
};
