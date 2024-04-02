import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html {
    min-height:100%;
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }

 * { 
  overflow-y:scroll
  max-width: 100vw;
  }

  *::-webkit-scrollbar {
  display: none;
  }

  body {
    height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

export default GlobalStyle;
