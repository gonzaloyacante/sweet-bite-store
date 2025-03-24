import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { CartDrawer } from "./components/layout/CartDrawer/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { AnimatedRoutes } from "./components/ui/AnimatedRoutes";

function App() {
  return (
    <CartProvider>
      <Router>
        <Box
          minHeight="100vh"
          width="100%"
          display="flex"
          flexDirection="column">
          <Header />
          <AnimatedRoutes />
          <CartDrawer />
        </Box>
      </Router>
    </CartProvider>
  );
}

export default App;
