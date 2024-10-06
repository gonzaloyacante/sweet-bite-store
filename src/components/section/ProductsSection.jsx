import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { SearchBar } from "../ui/SearchBar";
import { ProductCard } from "../ui/ProductCard";
import PropTypes from "prop-types";

export const ProductsSection = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

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
          <ProductCard key={product.id} {...product} />
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

ProductsSection.propTypes = {
  products: PropTypes.arrayOf(productShape).isRequired,
};
