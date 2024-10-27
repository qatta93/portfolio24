import styled from "styled-components";

interface NavbarDesktopWrapperProps {
  $visible: boolean;
}

export const NavbarDesktopWrapper = styled.header<NavbarDesktopWrapperProps>`
  position: fixed;
  padding: ${({ theme }) => theme.paddingHorizontal.desktop};
  top: 0;
  left: 0;
  right: 0;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndex.navigation};
  transition: transform 0.3s ease;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '-100%')});

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.paddingHorizontal.tablet};
  }
`;

export const LogoPlaceholder = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
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
