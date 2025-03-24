import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff5f7",
      100: "#fed7e2",
      200: "#fbb6ce",
      300: "#f687b3",
      400: "#ed64a6",
      500: "#d53f8c",
      600: "#b83280",
      700: "#97266d",
      800: "#702459",
      900: "#521b41",
    },
    secondary: {
      500: "#B83280",
    },
    background: {
      light: "#FFF9E6",
      dark: "#702459",
      extraLight: "#FFF5F7",
      primary: "#FED7E2",
      secondary: "#FBB6CE",
    },
    text: {
      primary: "#333333",
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
          borderColor: "primary.500",
          color: "primary.500",
          _hover: {
            bg: "primary.100",
          },
        },
      },
    },
  },
});

export default theme;
