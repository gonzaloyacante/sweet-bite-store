import { MainSection } from "../components/section/MainSection";
import { OffersSection } from "../components/section/OffersSection";
import { CustomCakesSection } from "../components/section/CustomCakesSection";
import { EventsSection } from "../components/section/EventsSection";
import { Footer } from "../components/layout/Footer";

import { offers, customCakes, events } from "../data/data";

export const HomePage = () => {
  return (
    <>
      <MainSection />
      <OffersSection offers={offers} />
      <CustomCakesSection customCakes={customCakes} />
      <EventsSection events={events} />
      <Footer />
    </>
  );
};
