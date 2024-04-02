import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: fit-content;
  padding: 15px 50px;
  font-size: 26px;
  font-weight: medium;
  border-radius: 30px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
