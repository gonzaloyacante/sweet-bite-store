import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as="footer" bg="pink.200" p={4} mt={8}>
      <Text fontSize="sm" color="pink.700" textAlign="center">
        Sweet Bite 2024 © Todos los derechos reservados.
      </Text>
    </Box>
  );
};
