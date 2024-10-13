import { Box, Text, ButtonGroup, Button, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg="background.secondary" p={8} textAlign="center">
      <Box color="text.primary" fontSize={16}>
        <Text fontWeight="bold" color="primary.700" fontSize={20}>
          Sweet Bite
        </Text>
        <Text>Calle Pastelería 123, Ciudad Sweet</Text>
        <Text>Teléfono: (123) 456-7890</Text>
      </Box>
      <ButtonGroup size="lg" m={2} variant="ghost">
        <Button onClick={() => {}}>
          <Icon as={FaInstagram} boxSize={5} color="primary.700" />
        </Button>
        <Button onClick={() => {}}>
          <Icon as={FaFacebookF} boxSize={5} color="primary.700" />
        </Button>
        <Button onClick={() => {}}>
          <Icon as={FaWhatsapp} boxSize={5} color="primary.700" />
        </Button>
      </ButtonGroup>
      <Text fontSize={16} color="primary.700">
        Sweet Bite 2024 © Todos los derechos reservados.
      </Text>
    </Box>
  );
};
