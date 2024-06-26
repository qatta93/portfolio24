import styled from "styled-components";

export const NavbarMobileContainer = styled.section`
  img {
    position: fixed;
    right: 15px;
    top: 15px;
    height: 48px;
    z-index: ${({ theme }) => theme.zIndex.menuIcon};
    padding: ${({ theme }) => theme.paddingHorizontal.mobile};
  }
`;
