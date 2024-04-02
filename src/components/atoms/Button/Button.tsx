import { ButtonWrapper } from "./Button.styled";
import { ButtonType } from "./Button.type";

export const Button: ButtonType = ({ text, ...props }) => {
  return <ButtonWrapper {...props}>{text}</ButtonWrapper>;
};
