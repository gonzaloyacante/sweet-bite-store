import { Box } from "@chakra-ui/react";
import { Header } from "./components/layout/Header";
import { MainSection } from "./components/section/MainSection";
import { ProductsSection } from "./components/section/ProductsSection";
import { CustomCakesSection } from "./components/section/CustomCakesSection";
import { OffersSection } from "./components/section/OffersSection";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <Box minHeight="100vh" width="100%" display="flex" flexDirection="column">
      <Header />
      <MainSection />
      <OffersSection />
      <ProductsSection />
      <CustomCakesSection />
      <Footer />
    </Box>
  );
}

export default App;
