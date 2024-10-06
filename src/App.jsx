import { Box } from "@chakra-ui/react";
import { Header } from "./components/layout/Header";
import { MainSection } from "./components/section/MainSection";
import { OffersSection } from "./components/section/OffersSection";
import { ProductsSection } from "./components/section/ProductsSection";
import { CustomCakesSection } from "./components/section/CustomCakesSection";
import { EventsSection } from "./components/section/EventsSection";
import { Footer } from "./components/layout/Footer";

import { offers, products, customCakes, events } from "./data/data";

function App() {
  return (
    <Box minHeight="100vh" width="100%" display="flex" flexDirection="column">
      <Header />
      <MainSection />
      <OffersSection offers={offers} />
      <ProductsSection products={products} />
      <CustomCakesSection customCakes={customCakes} />
      <EventsSection events={events} />
      <Footer />
    </Box>
  );
}

export default App;
