import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div<{ isOverSecondary: boolean; isVisible: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${({ theme, isOverSecondary }) => 
    isOverSecondary ? theme.colors.primary : theme.colors.secondary};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: all 0.1s ease;
  transform: translate(-50%, -50%);
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
`;

const CursorGradient: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverSecondary, setIsOverSecondary] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const theme = document.documentElement.style.getPropertyValue('--desktop-breakpoint') || '1200px';
      setIsDesktop(window.innerWidth >= parseInt(theme));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;
        
        if (backgroundColor.startsWith('rgba')) {
          const values = backgroundColor.match(/[\d.]+/g);
          if (values && 
              Math.abs(parseInt(values[0]) - 179) < 5 && 
              Math.abs(parseInt(values[1]) - 255) < 5 && 
              Math.abs(parseInt(values[2]) - 182) < 5) { 
            setIsOverSecondary(true);
          } else {
            setIsOverSecondary(false);
          }
        } else {
          setIsOverSecondary(false);
        }
      }
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <CursorDot 
      style={{ left: position.x, top: position.y }}
      isOverSecondary={isOverSecondary}
      isVisible={isDesktop}
    />
  );
};

export default CursorGradient;
