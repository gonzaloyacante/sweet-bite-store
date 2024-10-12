import { useState } from "react";
import {
  VStack,
  Heading,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  Text,
  HStack,
} from "@chakra-ui/react";

export const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h4" size="md" textAlign="center" mb={4}>
        Método de Pago
      </Heading>
      <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
        <VStack align="start">
          <Radio value="creditCard">Tarjeta de Crédito</Radio>
          <Radio value="paypal">PayPal</Radio>
        </VStack>
      </RadioGroup>
      {paymentMethod === "creditCard" && (
        <>
          <FormControl isRequired>
            <FormLabel>Número de tarjeta</FormLabel>
            <Input placeholder="1234 5678 9012 3456" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Nombre en la tarjeta</FormLabel>
            <Input placeholder="Nombre completo" />
          </FormControl>
          <HStack>
            <FormControl isRequired>
              <FormLabel>Fecha de expiración</FormLabel>
              <Input placeholder="MM/AA" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>CVV</FormLabel>
              <Input placeholder="123" type="password" maxLength={3} />
            </FormControl>
          </HStack>
        </>
      )}
      {paymentMethod === "paypal" && (
        <Text textAlign="center">
          Serás redirigido a PayPal para completar el pago.
        </Text>
      )}
    </VStack>
  );
};
