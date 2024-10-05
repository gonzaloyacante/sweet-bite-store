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
      dark: "#F5F5F5",
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
        bg: "background.light",
        color: "text.main",
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        outline: {
          borderColor: "pink.500",
          color: "pink.500",
          _hover: {
            bg: "pink.100",
          },
        },
      },
    },
  },
});

export default theme;
