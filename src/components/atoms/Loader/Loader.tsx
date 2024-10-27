import React from 'react';
import { LoaderWrapper, LoaderAnimation, LoaderContainer, LoaderText } from './Loader.styled';

interface LoaderProps {
  isExiting: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isExiting }) => {
  return (
    <LoaderWrapper isExiting={isExiting}>
      <LoaderContainer>
        <LoaderAnimation />
        <LoaderText>Hold on! Some magic is loading...</LoaderText>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
