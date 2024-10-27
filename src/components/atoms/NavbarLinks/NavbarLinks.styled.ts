import styled from "styled-components";

export const Navbar = styled.nav<{ activeSection: number }>`
  display: flex;
  align-items: center;
  gap: 70px;
  font-size: 20px;

  & > li {
    list-style-type: none;
  }

  & > button:nth-child(${(props) => props.activeSection}) {
    text-decoration: underline 3px #b3ffb6;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const StyledButton = styled.button`
  transition: transform 0.2s;
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 20px;

  &:hover {
    text-decoration: underline 3px #b3ffb6;
    transform: scale(1.05);
  }
`;

export const StyledDownloadLink = styled.a`
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  padding: 5px 18px;
  border-radius: 10px;
  transition: transform 0.2s;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 15px;
    margin-right: 5px;
  }
`;
