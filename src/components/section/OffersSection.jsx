import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

export const OffersSection = () => {
  return (
    <Box bg="pink.100" borderRadius="lg" p={6} m={4} boxShadow="md">
      <Heading as="h3" size="lg" color="pink.800" mb={4}>
        Ofertas Especiales
      </Heading>
      <SimpleGrid columns={{ base: 1 }} spacing={4}>
        <Box bg="pink.200" p={4} borderRadius="lg">
          <Heading as="h4" size="md" color="pink.800" fontWeight="semibold">
            2x1 en Cupcakes
          </Heading>
          <Text color="pink.600">Todos los martes</Text>
        </Box>
        <Box bg="pink.200" p={4} borderRadius="lg">
          <Heading as="h4" size="md" color="pink.800" fontWeight="semibold">
            20% desc. en Tartas
          </Heading>
          <Text color="pink.600">Código: TARTA20</Text>
        </Box>
        <Box bg="pink.200" p={4} borderRadius="lg">
          <Heading as="h4" size="md" color="pink.800" fontWeight="semibold">
            Envío gratis
          </Heading>
          <Text color="pink.600">En pedidos +$50</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
