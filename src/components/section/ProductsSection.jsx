import { Flex, Grid } from "@chakra-ui/react";
import { ProductCard } from "../ui/ProductCard";
import { products } from "../../data/products";

export const ProductsSection = () => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      gap={4}
      m={4}>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
        alignItems="center"
        justifyContent="center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
    </Flex>
  );
};
