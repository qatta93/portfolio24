import styled from "styled-components";

export const NavbarDesktopWrapper = styled.header`
  position: fixed;
  padding: ${({ theme }) => theme.paddingHorizontal.desktop};
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  justify-content: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.paddingHorizontal.tablet};
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
