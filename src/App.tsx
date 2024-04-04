import { HeroSection } from "./components/organisms/HeroSection";
import { Layout } from "./components/molecules/Layout";
import { ContactSection } from "./components/organisms/ContactSection";

function App() {
  return (
    <Layout>
      <HeroSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
