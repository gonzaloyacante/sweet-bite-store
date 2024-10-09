import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { SearchBar } from "../components/ui/SearchBar";
import { ProductCard } from "../components/ui/ProductCard";

import useCart from "../hooks/useCart";

export const ProductsPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const sortMethods = {
        name: (a, b) => a.name.localeCompare(b.name),
        // category: (a, b) => a.category.localeCompare(b.category),
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
      };
      return sortMethods[sortOption] ? sortMethods[sortOption](a, b) : 0;
    });

  return (
    <Box>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        m={4}
        gap={4}
        alignItems="start"
        justifyContent="center">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Grid>
    </Box>
  );
};

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(productShape).isRequired,
};
