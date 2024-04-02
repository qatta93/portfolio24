import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const LinkBase = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(LinkBase)`
  &:hover {
    text-decoration: underline 3px #b3ffb6;
  }
`;

export const StyledDownloadLink = styled(LinkBase)`
  background-color: #b3ffb6;
  padding: 5px 8px;
  border-radius: 10px;

  img {
    height: 15px;
    margin-right: 5px;
  }
`;
