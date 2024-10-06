import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const OffersSection = ({ offers }) => {
  return (
    <Box bg="background.primary" borderRadius="lg" p={6} m={4} boxShadow="lg">
      <Heading as="h3" size="lg" color="primary.700" mb={4}>
        Ofertas Especiales
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {offers.map((offer, index) => (
          <Box key={index} bg="background.secondary" p={4} borderRadius="lg">
            <Heading
              as="h4"
              size="md"
              color="primary.700"
              fontWeight="semibold">
              {offer.title}
            </Heading>
            <Text color="primary.500">{offer.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const offerShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

OffersSection.propTypes = {
  offers: PropTypes.arrayOf(offerShape).isRequired,
};
