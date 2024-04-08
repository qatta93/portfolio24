import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 70px;
  font-size: 20px;

  & > li {
    list-style-type: none;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const ButtonBase = styled.button`
  transition: transform 0.2s;
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledButton = styled(ButtonBase)`
  &:hover {
    text-decoration: underline 3px #b3ffb6;
  }
`;

export const StyledDownloadLink = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  padding: 5px 8px;
  border-radius: 10px;

  img {
    height: 15px;
    margin-right: 5px;
  }
`;
