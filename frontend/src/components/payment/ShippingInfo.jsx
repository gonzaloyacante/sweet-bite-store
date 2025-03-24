import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";

export const ShippingInfo = () => {
  return (
    <VStack spacing={3}px={3}>
      <HStack w="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input placeholder="Nombre/s" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input placeholder="Apellido/s" />
        </FormControl>
      </HStack>
      <FormControl isRequired>
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" placeholder="ejemplo@gmail.com" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Dirección</FormLabel>
        <Input placeholder="Dirección" />
      </FormControl>
      <HStack w="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel>Ciudad</FormLabel>
          <Input placeholder="Ciudad" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Estado/Provincia</FormLabel>
          <Input placeholder="Estado/Provincia" />
        </FormControl>
      </HStack>
      <HStack w="100%" gap={4}>
        <FormControl isRequired>
          <FormLabel>Código Postal</FormLabel>
          <Input placeholder="Código Postal" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Número de Teléfono</FormLabel>
          <Input placeholder="+1 (555) 000-0000" />
        </FormControl>
      </HStack>
      <Checkbox colorScheme="primary">
        Mi dirección de facturación y envío son las mismas
      </Checkbox>
    </VStack>
  );
};
