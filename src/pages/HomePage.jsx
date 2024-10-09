import { MainSection } from "../components/section/MainSection";
import { OffersSection } from "../components/section/OffersSection";
// import { ProductsSection } from "../components/section/ProductsSection";
import { CustomCakesSection } from "../components/section/CustomCakesSection";
import { EventsSection } from "../components/section/EventsSection";
import { Footer } from "../components/layout/Footer";

import { offers, customCakes, events } from "../data/data";

export const HomePage = () => {
  return (
    <>
      <MainSection />
      <OffersSection offers={offers} />
      {/* <ProductsSection products={products} /> */}
      <CustomCakesSection customCakes={customCakes} />
      <EventsSection events={events} />
      <Footer />
    </>
  );
};
