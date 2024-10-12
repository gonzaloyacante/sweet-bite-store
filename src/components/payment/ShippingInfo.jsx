import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  HStack,
} from "@chakra-ui/react";

export const ShippingInfo = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h4" size="md" textAlign="center" mb={4}>
        Información de Envío
      </Heading>
      <FormControl isRequired>
        <FormLabel>Nombre completo</FormLabel>
        <Input placeholder="Nombre completo" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Dirección</FormLabel>
        <Input placeholder="Dirección" />
      </FormControl>
      <HStack>
        <FormControl isRequired>
          <FormLabel>Ciudad</FormLabel>
          <Input placeholder="Ciudad" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Código Postal</FormLabel>
          <Input placeholder="Código Postal" />
        </FormControl>
      </HStack>
      <FormControl isRequired>
        <FormLabel>País</FormLabel>
        <Select placeholder="Selecciona un país">
          <option value="argentina">Argentina</option>
          <option value="chile">Chile</option>
          <option value="mexico">México</option>
        </Select>
      </FormControl>
    </VStack>
  );
};
