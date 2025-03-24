import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { products } from "../../data/data";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div exit={{ opacity: 0 }}>
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div exit={{ opacity: 0 }}>
              <ProductsPage products={products} />
            </motion.div>
          }
        />
        <Route
          path="/payment"
          element={
            <motion.div exit={{ opacity: 0 }}>
              <PaymentPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
