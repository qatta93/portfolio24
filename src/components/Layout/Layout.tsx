import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutPositioner, LayoutWrapper, MainComponent } from "./Layout.styled";
import { LayoutType } from "./Layout.type";

export const Layout: LayoutType = ({ children }) => {
  return (
    <LayoutPositioner>
      <LayoutWrapper>
        <Header />
        <MainComponent>{children}</MainComponent>
        <Footer />
      </LayoutWrapper>
    </LayoutPositioner>
  );
};
