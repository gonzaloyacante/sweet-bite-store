import { VStack, Heading, Text, Divider, HStack, Box } from "@chakra-ui/react";
import useCart from "../../hooks/useCart";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const OrderSummary = () => {
  const { cartItems } = useCart();

  const shippingCost = 5.99;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  return (
    <Box>
      <Heading as="h4" size="md" textAlign="center" mb={4}>
        Resumen del Pedido
      </Heading>
      <VStack spacing={4} align="stretch">
        {cartItems.map((item) => (
          <HStack key={item.id} justifyContent="space-between">
            <Text>
              {item.name} x {item.quantity}
            </Text>
            <Text>{formatCurrency(item.price * item.quantity)}</Text>
          </HStack>
        ))}
        <Divider />
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>{formatCurrency(subtotal)}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Envío</Text>
          <Text>{formatCurrency(shippingCost)}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Impuestos (10%)</Text>
          <Text>{formatCurrency(tax)}</Text>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" fontWeight="bold">
          <Text>Total</Text>
          <Text>{formatCurrency(total)}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};
