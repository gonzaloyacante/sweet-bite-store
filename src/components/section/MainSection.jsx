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
      bg="pink.100">
      <Box>
        <Text
          fontSize="xx-large"
          textAlign="center"
          color="pink.700"
          fontWeight="semibold">
          Deliciosos pasteles hechos con amor
        </Text>
        <Text textAlign="center" color="pink.500">
          Descubre nuestra selección de pasteles artesanales para cada ocasión
        </Text>
      </Box>

      <Image
        src="https://picsum.photos/300/300"
        alt="Imagen principal"
        borderRadius="xl"
        w="100%"
        maxW={500}
      />
    </Flex>
  );
};
