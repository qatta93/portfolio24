import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div<{ isOverSecondary: boolean }>`
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
`;

const CursorGradient: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverSecondary, setIsOverSecondary] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Get element under cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;
        
        // Check if background is similar to secondary color (rgba(179, 255, 182, 0.8))
        if (backgroundColor.startsWith('rgba')) {
          const values = backgroundColor.match(/[\d.]+/g);
          if (values && 
              Math.abs(parseInt(values[0]) - 179) < 5 && // Red
              Math.abs(parseInt(values[1]) - 255) < 5 && // Green
              Math.abs(parseInt(values[2]) - 182) < 5) { // Blue
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
  }, []);

  return (
    <CursorDot 
      style={{ left: position.x, top: position.y }}
      isOverSecondary={isOverSecondary}
    />
  );
};

export default CursorGradient;
