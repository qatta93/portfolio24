import { scrollToSection } from "helpers/scrollToSection";
import { Button } from "../../atoms/Button";
import {
  HeroSectionIntroduction,
  HeroSectionSubtitle,
  HeroSectionTitle,
  HeroSectionWrapper,
  AnimatedButton,
  LogosSection,
  LogoWrapper,
  HeroSectionContent,
  ScrollIndicator,
} from "./HeroSection.styled";
import { SplineModel } from "./SplineModel";
import { useState, useEffect, useCallback } from "react";
import { TypeWriter } from "./TypeWriter";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback((event: WheelEvent) => {
    if (!hasScrolled && event.deltaY > 0) {
      setHasScrolled(true);
      scrollToSection("projects");
      window.removeEventListener("wheel", handleScroll);
    }
  }, [hasScrolled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    if (!hasScrolled) {
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll, hasScrolled]);

  return (
    <HeroSectionWrapper>
      <HeroSectionContent>
        <HeroSectionIntroduction>
          <HeroSectionTitle>
            <div style={{ height: "1.2em", whiteSpace: "nowrap" }}>
              {showContent && (
                <TypeWriter
                  text="Hey there!"
                  delay={0}
                  showCursor={!showFirstLine}
                  onComplete={() => {
                    setShowFirstLine(true);
                    setTimeout(() => setShowSubtitle(true), 500);
                  }}
                />
              )}
            </div>
            <div style={{ height: "1.2em", whiteSpace: "nowrap" }}>
              {showFirstLine && (
                <TypeWriter
                  text="I am Patrycja."
                  delay={0}
                  showCursor={!showSecondLine}
                  onComplete={() => {
                    setShowSecondLine(true);
                    setTimeout(() => setShowButton(true), 500);
                  }}
                />
              )}
            </div>
          </HeroSectionTitle>
          <HeroSectionSubtitle $visible={showSubtitle}>
            CREATIVE FRONTEND DEVELOPER
          </HeroSectionSubtitle>
          <AnimatedButton $visible={showButton}>
            <Button
              text={`Let's talk`}
              onClick={() => scrollToSection("contact")}
            />
          </AnimatedButton>
        </HeroSectionIntroduction>
        <SplineModel />
      </HeroSectionContent>
      <LogosSection>
        <LogoWrapper>
          <img src="/images/gtv-logo.svg" alt="GTV" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="/images/nespresso-logo.svg" alt="Nespresso" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="/images/procter-gamble-logo.svg" alt="Procter & Gamble" />
        </LogoWrapper>
        <LogoWrapper>
          <img src="/images/salt-logo.svg" alt="Salt" />
        </LogoWrapper>
      </LogosSection>
      <ScrollIndicator onClick={() => scrollToSection("projects")}>
        <span>Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none">
          <path d="M12 16.59l-6.3-6.3 1.4-1.4 4.9 4.9 4.9-4.9 1.4 1.4z" />
        </svg>
      </ScrollIndicator>
    </HeroSectionWrapper>
  );
};
