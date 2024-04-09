import { HeroSection } from "./components/organisms/HeroSection";
import { Layout } from "./components/molecules/Layout";
import { ContactSection } from "./components/organisms/ContactSection";
import { AboutSection } from "./components/organisms/AboutSection";
import { ProjectsSection } from "./components/organisms/ProjectsSection";

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
