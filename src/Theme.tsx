import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F5F5F5",
    secondary: "rgba(179, 255, 182, 0.8)",
    darkSecondary: "#83FA88",
    lightBlack: "#1E1E1E",
    lightGray: "#b3b3b3",
    darkGray: "#a5a5a5",
    orange: "#ff8709",
    shadow: "rgba(149, 157, 165, 0.2)",
  },
  fonts: {
    default: "Poppins, sans-serif",
    handWritting: "Kalam, cursive",
  },
  zIndex: {
    background: -1,
    button: 10,
    modal: 50,
    navigation: 40,
    menuIcon: 60,
  },
  paddingHorizontal: {
    desktop: "0 70px",
    tablet: "0 40px",
    mobile: "0 20px",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1200px",
  },
  maxWidth: "1400px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
