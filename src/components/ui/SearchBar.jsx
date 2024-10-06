import {
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Box,
  Icon,
} from "@chakra-ui/react";
import { RiMenuSearchLine } from "react-icons/ri";
import PropTypes from "prop-types";

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) => {
  return (
    <Box m={4}>
      <InputGroup mb={4} boxShadow="md" borderRadius="lg">
        <InputLeftElement pointerEvents="none">
          <Icon as={RiMenuSearchLine} color="primary.500" />
        </InputLeftElement>
        <Input
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="background.light"
          color="text.primary"
          _placeholder={{ color: "text.secondary" }}
          _hover={{ borderColor: "primary.300" }}
          _focus={{ borderColor: "primary.500" }}
        />
      </InputGroup>

      <Select
        color="primary.500"
        borderRadius="lg"
        boxShadow="md"
        placeholder="Ordenar por..."
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        bg="background.light"
        _hover={{ borderColor: "primary.300" }}
        _focus={{ borderColor: "primary.500" }}>
        <option value="name">Nombre</option>
        <option value="category">Categoría</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
      </Select>
    </Box>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
};
