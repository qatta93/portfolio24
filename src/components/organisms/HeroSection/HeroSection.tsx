import { scrollToSection } from "helpers/scrollToSection";
import { Button } from "../../atoms/Button";
import {
  HeroSectionIntroduction,
  HeroSectionSubtitle,
  HeroSectionTitle,
  HeroSectionWrapper,
  AnimatedButton,
} from "./HeroSection.styled";
import { SplineModel } from "./SplineModel";
import { useState, useEffect } from "react";
import { TypeWriter } from "./TypeWriter";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSectionWrapper>
      <HeroSectionIntroduction>
        <HeroSectionTitle>
          <div style={{ height: '1.2em', whiteSpace: 'nowrap' }}>
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
          <div style={{ height: '1.2em', whiteSpace: 'nowrap' }}>
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
    </HeroSectionWrapper>
  );
};
