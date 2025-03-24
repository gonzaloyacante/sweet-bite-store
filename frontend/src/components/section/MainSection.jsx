import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const MainSection = () => {
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      gap={4}
      p={6}
      m={4}
      borderRadius="2xl"
      bg="background.primary"
      direction={{ base: "column", md: "row" }}>
      <Box textAlign="center">
        <Text fontSize={{base: "x-large", md: "xx-large"}} color="primary.700" fontWeight="semibold">
          Deliciosos pasteles hechos con amor
        </Text>
        <Text color="primary.500">
          Descubre nuestra selección de pasteles artesanales para cada ocasión
        </Text>
        <Button
          mt={4}
          size={{ base: "md", md: "lg" }}
          onClick={() => navigate("/products")}>
          Ver productos
        </Button>
      </Box>

      <Image
        src="https://i.ibb.co/nCMRzds/sweet-pastry-assortment-top-view.jpg"
        alt="Imagen principal"
        borderRadius="xl"
        w={{ base: "100%", md: "50%" }}
        maxW={500}
        boxShadow="lg"
        order={{ base: 2, md: 2 }}
      />
    </Flex>
  );
};
