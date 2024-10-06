import { Flex, Box, Text, Image } from "@chakra-ui/react";

export const MainSection = () => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      gap={4}
      p={6}
      m={4}
      borderRadius="2xl"
      bg="background.primary">
      <Box>
        <Text
          fontSize="xx-large"
          textAlign="center"
          color="primary.700"
          fontWeight="semibold">
          Deliciosos pasteles hechos con amor
        </Text>
        <Text textAlign="center" color="primary.500">
          Descubre nuestra selección de pasteles artesanales para cada ocasión
        </Text>
      </Box>

      <Image
        src="https://i.ibb.co/nCMRzds/sweet-pastry-assortment-top-view.jpg"
        alt="Imagen principal"
        borderRadius="xl"
        w="100%"
        maxW={500}
      />
    </Flex>
  );
};
