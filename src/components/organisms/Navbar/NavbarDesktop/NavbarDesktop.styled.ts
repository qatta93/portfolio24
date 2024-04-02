import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarDesktopWrapper = styled.header`
  position: fixed;
  padding: 0 70px;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  justify-content: end;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

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
