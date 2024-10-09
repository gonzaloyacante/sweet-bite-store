import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { CartDrawer } from "./components/layout/CartDrawer/CartDrawer";
import { CartProvider } from "./context/CartContext";

import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { PaymentPage } from "./pages/PaymentPage";

import { products } from "./data/data";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductsPage products={products} />}
            />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <CartDrawer />
        </Box>
      </Router>
    </CartProvider>
  );
}

export default App;
