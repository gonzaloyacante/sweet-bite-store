import { Box, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg="background.secondary" p={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto">
        <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" color="primary.700" fontSize={20}>
            Sweet Bite
          </Text>
          <Text color="text.primary">Calle Pastelería 123, Ciudad Sweet</Text>
          <Text color="text.primary">Teléfono: (123) 456-7890</Text>
        </Box>
        <Flex>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaInstagram} boxSize={5} color="primary.700" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaFacebookF} boxSize={5} color="primary.700" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => {}}>
            <Icon as={FaWhatsapp} boxSize={5} color="primary.700" />
          </Button>
        </Flex>
      </Flex>
      <Text fontSize="sm" color="primary.700" textAlign="center">
        Sweet Bite 2024 © Todos los derechos reservados.
      </Text>
    </Box>
  );
};
