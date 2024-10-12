import { VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import useCart from "../../hooks/useCart";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const OrderConfirmation = () => {
  const { cartItems, cartTotal } = useCart();
  const shippingCost = 5.99;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shippingCost + tax;
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h4" size="md" textAlign="center" mb={4}>
        Confirmación de Pedido
      </Heading>
      <Text textAlign="center" fontSize="lg" fontWeight="bold">
        ¡Gracias por tu compra!
      </Text>
      <Text textAlign="center" fontSize="lg">
        Tu número de pedido es: <strong>{orderNumber}</strong>
      </Text>
      <Box borderWidth={1} borderRadius="lg" p={4}>
        <Text fontWeight="bold" mb={2}>
          Resumen del pedido:
        </Text>
        {cartItems.map((item) => (
          <Text key={item.id}>
            {item.name} x {item.quantity}:{" "}
            {formatCurrency(item.price * item.quantity)}
          </Text>
        ))}
        <Text mt={2}>Subtotal: {formatCurrency(cartTotal)}</Text>
        <Text>Envío: {formatCurrency(shippingCost)}</Text>
        <Text>Impuestos: {formatCurrency(tax)}</Text>
        <Text fontWeight="bold" mt={2}>
          Total: {formatCurrency(total)}
        </Text>
      </Box>
      <Button>Imprimir Confirmación</Button>
      <Button variant="outline">Continuar Comprando</Button>
    </VStack>
  );
};
