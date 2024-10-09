import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

export const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para procesar el pago
    console.log("Processing payment for:", formData);
  };

  return (
    <Box padding={4}>
      <Text fontSize="2xl" mb={4}>
        Proceso de Pago
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Ingrese su dirección"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Número de tarjeta</FormLabel>
            <Input
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Ingrese el número de tarjeta"
            />
          </FormControl>
          <Flex justifyContent="space-between">
            <FormControl isRequired>
              <FormLabel>Fecha de expiración</FormLabel>
              <Input
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="MM/AA"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>CVV</FormLabel>
              <Input
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
              />
            </FormControl>
          </Flex>
          <Button type="submit" colorScheme="teal">
            Pagar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
