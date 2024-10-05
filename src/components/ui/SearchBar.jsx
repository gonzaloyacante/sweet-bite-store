import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearchengin } from "react-icons/fa6";
import PropTypes from "prop-types";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup m={4}>
      <InputLeftElement pointerEvents="none">
        <FaSearchengin color="gray.400" />
      </InputLeftElement>
      <Input
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
