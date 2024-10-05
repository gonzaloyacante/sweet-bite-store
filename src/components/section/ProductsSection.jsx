import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { SearchBar } from "../ui/SearchBar";
import { ProductCard } from "../ui/ProductCard";
import { products } from "../../data/data";

export const ProductsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        m={4}
        gap={4}
        alignItems="start"
        justifyContent="center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
    </Box>
  );
};
