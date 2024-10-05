import { Box, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg="pink.200" mt={12} p={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
      >
        <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" color="pink.800">
            Dulce Rosa
          </Text>
          <Text>Calle Pastelería 123, Ciudad Dulce</Text>
          <Text>Teléfono: (123) 456-7890</Text>
        </Box>
        <Flex>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaInstagram} boxSize={5} color="pink.800" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaFacebookF} boxSize={5} color="pink.800" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaWhatsapp} boxSize={5} color="pink.800" />
          </Button>
        </Flex>
      </Flex>
      <Text fontSize="sm" color="pink.700" textAlign="center">
        Sweet Bite 2024 © Todos los derechos reservados.
      </Text>
    </Box>
  );
};
