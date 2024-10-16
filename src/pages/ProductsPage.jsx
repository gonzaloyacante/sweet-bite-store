import { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { SearchBar } from "../components/ui/SearchBar";
import { ProductCard } from "../components/ui/ProductCard";
import useCart from "../hooks/useCart";
import { Pagination } from "../components/ui/Pagination";

const ITEMS_PER_PAGE = 10;

export const ProductsPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const sortMethods = {
        name: (a, b) => a.name.localeCompare(b.name),
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
      };
      return sortMethods[sortOption] ? sortMethods[sortOption](a, b) : 0;
    });

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
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
