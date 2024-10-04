import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#FF6F61",
    },
    secondary: {
      500: "#FFD54F",
    },
    background: {
      light: "#FFF9E6",
    },
    text: {
      main: "#333333",
      secondary: "#555555",
    },
    success: "#4CAF50",
    error: "#F44336",
    warning: "#FF9800",
  },
  styles: {
    global: {
      body: {
        bg: "#FFF9E6",
        color: "#333333",
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
});

export default theme;
