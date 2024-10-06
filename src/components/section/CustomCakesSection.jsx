import { Box, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Slider from "react-slick";

export const CustomCakesSection = ({ customCakes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, sm: 2, md: 3 }),
    slidesToScroll: 1,
  };

  return (
    <Box m={4} bg="background.primary" borderRadius="lg" p={6} boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" color="primary.700">
        Pasteles Personalizados
      </Text>
      <Text color="primary.500" mb={6}>
        Explora nuestra galería de pasteles personalizados para inspirarte en tu
        próximo pedido especial.
      </Text>
      <Slider {...settings}>
        {customCakes.map((cake) => (
          <Box key={cake.id} p={2}>
            <Box borderRadius="lg" overflow="hidden">
              <Image
                src={cake.image}
                alt={cake.name}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <Text
              textAlign="center"
              color="primary.700"
              mt={2}
              fontWeight="semibold">
              {cake.name}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const cakeShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});

CustomCakesSection.propTypes = {
  customCakes: PropTypes.arrayOf(cakeShape).isRequired,
};
