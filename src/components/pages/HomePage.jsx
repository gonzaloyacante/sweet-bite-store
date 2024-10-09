import { Box } from "@chakra-ui/react";
import { MainSection } from "../components/section/MainSection";
import { OffersSection } from "../components/section/OffersSection";
import { ProductsSection } from "../../components/section/ProductsSection";
import { CustomCakesSection } from "../components/section/CustomCakesSection";
import { EventsSection } from "../";

import { offers, products, customCakes, events } from "../data/data";

export const HomePage = () => {
  return (
    <Box padding={4}>
      <MainSection />
      <OffersSection offers={offers} />
      <ProductsSection products={products} />
      <CustomCakesSection customCakes={customCakes} />
      <EventsSection events={events} />
    </Box>
  );
};
