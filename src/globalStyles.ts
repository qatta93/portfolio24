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
    background-color: #F5F5F5;
    overflow-x: hidden;
    font-family: Poppins, sans-serif;
    color: #1E1E1E;
  }
`;

export default GlobalStyle;