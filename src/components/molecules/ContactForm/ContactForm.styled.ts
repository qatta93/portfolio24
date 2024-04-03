import styled, { css } from "styled-components";

import { Button } from "../../atoms/Button";
import Lottie from "lottie-react";

export const SuccessMessage = styled.section`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledLottie = styled(Lottie)`
  height: 200px;
`;

export const ContactFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 20px;
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const inputsStyle = css`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  border-radius: 20px;
  border: none;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;

  &:focus {
    background-color: white;
    outline: 1px solid ${({ theme }) => theme.colors.darkSecondary};
  }
`;

export const FormInput = styled.input`
  ${inputsStyle}
  padding: 10px 10px 10px 20px;
  height: 40px;
`;

export const FormTextArea = styled.textarea`
  ${inputsStyle}
  padding: 25px 10px 10px 20px;
  height: 150px;
`;

export const Loader = styled.span`
  margin: 1.5rem auto;
  width: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;

  @keyframes l5 {
    0% {
      box-shadow: 20px 0 #000, -20px 0 #0002;
      background: #000;
    }
    33% {
      box-shadow: 20px 0 #000, -20px 0 #0002;
      background: #0002;
    }
    66% {
      box-shadow: 20px 0 #0002, -20px 0 #000;
      background: #0002;
    }
    100% {
      box-shadow: 20px 0 #0002, -20px 0 #000;
      background: #000;
    }
  }
`;

export const StyledButton = styled(Button)`
  font-size: 18px;
  padding: 10px 40px;
  margin: 0 auto;
`;
