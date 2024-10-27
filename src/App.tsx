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
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
      <Layout>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
