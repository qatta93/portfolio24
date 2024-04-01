import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.header<{ visibility: any }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100dvh;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  background-color: white;
  transition: all 0.5s ease-out;
  transform: ${(props) =>
    props.visibility ? "translateX(0px)" : "translateX(400px)"};
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  font-size: 25px;

  & > li {
    list-style-type: none;
  }
`;

export const LinkBase = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledLink = styled(LinkBase)``;

export const StyledDownloadLink = styled(LinkBase)`
  background-color: #b3ffb6;
  padding: 5px 8px;
  border-radius: 10px;

  img {
    height: 18px;
    margin-right: 5px;
  }
`;
