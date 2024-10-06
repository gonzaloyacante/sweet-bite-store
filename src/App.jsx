import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/layout/Header";
import { MainSection } from "./components/section/MainSection";
import { OffersSection } from "./components/section/OffersSection";
import { ProductsSection } from "./components/section/ProductsSection";
import { CustomCakesSection } from "./components/section/CustomCakesSection";
import { EventsSection } from "./components/section/EventsSection";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/layout/CartDrawer";

import { offers, products, customCakes, events } from "./data/data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const toggleCartDrawer = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <Box minHeight="100vh" width="100%" display="flex" flexDirection="column">
      <Header cartItems={cartItems} toggleCartDrawer={toggleCartDrawer} />
      <MainSection />
      <OffersSection offers={offers} />
      <ProductsSection products={products} addToCart={addToCart} />
      <CustomCakesSection customCakes={customCakes} />
      <EventsSection events={events} />
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={toggleCartDrawer}
        cartItems={cartItems}
      />
    </Box>
  );
}

export default App;
