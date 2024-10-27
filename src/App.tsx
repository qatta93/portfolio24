import { useEffect, useState } from "react";
import { HeroSection } from "./components/organisms/HeroSection";
import { Layout } from "./components/molecules/Layout";
import { ContactSection } from "./components/organisms/ContactSection";
import { AboutSection } from "./components/organisms/AboutSection";
import { ProjectsSection } from "./components/organisms/ProjectsSection";
import Loader from "./components/atoms/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsExiting(true);
      // Remove loader after animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Match animation duration
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
      <Layout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
