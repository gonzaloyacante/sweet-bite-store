import { useEffect, useState } from "react";
import { Box, Grid, Container } from "@chakra-ui/react";
import { ProductCard } from "../components/ui/ProductCard";
import { getProducts } from "../api/products";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Box>Cargando...</Box>;
  if (error) return <Box>Error: {error}</Box>;

  return (
    <Container maxW="container.xl" py={8}>
      <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
