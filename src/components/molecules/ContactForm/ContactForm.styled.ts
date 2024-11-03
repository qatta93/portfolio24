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

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 50px 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-size: 16px;
`;

export const Label = styled.span``;

export const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  position: relative;
  flex: 1;
`;

export const InputWrapperLocation = styled(InputWrapper)`
  margin-bottom: 30px;
  justify-content: end;
  input {
    flex-grow: 0;
    width: 130px;
  }
`;

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
  background: transparent;
  color: ${({ theme }) => theme.colors.orange};
  outline: none;
  flex-grow: 1;
`;

export const StyledTextarea = styled.textarea`
  border: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
  background: transparent;
  min-height: 100px;
  resize: none;
  color: ${({ theme }) => theme.colors.orange};
  outline: none;
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
  background-color: ${({ theme }) => theme.colors.primary};
`;
