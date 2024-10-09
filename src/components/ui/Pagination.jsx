import PropTypes from "prop-types";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect } from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <HStack spacing={6} my={6}>
      <IconButton
        size="sm"
        variant="outline"
        icon={<FaAngleLeft />}
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Text
          key={index + 1}
          cursor="pointer"
          fontWeight={currentPage === index + 1 ? "bold" : "normal"}
          onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </Text>
      ))}
      <IconButton
        size="sm"
        variant="outline"
        icon={<FaAngleRight />}
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </HStack>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
