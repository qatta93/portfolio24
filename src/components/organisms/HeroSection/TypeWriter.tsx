import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface TypeWriterProps {
  text: string;
  delay: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

interface TypeWriterSpanProps {
  showCursor: boolean;
}

const TypeWriterSpan = styled.span<TypeWriterSpanProps>`
  ${({ showCursor }) => showCursor && `
    border-right: 2px solid;
    animation: blink 0.75s step-end infinite;
  `}

  @keyframes blink {
    50% { border-color: transparent; }
  }
`;

export const TypeWriter = ({ text, delay, showCursor = true, onComplete }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50); // Reduced from 100 to 50 for faster typing

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0);
      setCurrentText('');
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [delay]);

  return <TypeWriterSpan showCursor={showCursor}>{currentText}</TypeWriterSpan>;
};
