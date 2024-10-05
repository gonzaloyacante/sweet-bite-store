import { Grid } from "@chakra-ui/react";
import { ProductCard } from "../ui/ProductCard";
import { products } from "../../data/products";

export const ProductsSection = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
      m={4}
      gap={4}
      alignItems="start"
      justifyContent="center">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};
