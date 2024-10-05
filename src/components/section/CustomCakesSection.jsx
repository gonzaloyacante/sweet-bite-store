import { Box, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

import { customCakes } from "../../data/data";

export const CustomCakesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, sm: 2, md: 3 }),
    slidesToScroll: 1,
  };

  return (
    <Box m={4} bg="pink.100" borderRadius="lg" p={10} boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" color="pink.800" mb={4}>
        Pasteles Personalizados
      </Text>
      <Text color="pink.600" mb={6}>
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
              color="pink.800"
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
