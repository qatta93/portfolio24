import { Footer } from "../Footer";
import { Navbar } from "@/organisms/Navbar";
import {
  LayoutPositioner,
  LayoutWrapper,
  MainComponent,
} from "./Layout.styled";
import { LayoutType } from "./Layout.type";

export const Layout: LayoutType = ({ children }) => {
  return (
    <LayoutPositioner>
      <LayoutWrapper>
        <Navbar />
        <MainComponent>{children}</MainComponent>
        <Footer />
      </LayoutWrapper>
    </LayoutPositioner>
  );
};
