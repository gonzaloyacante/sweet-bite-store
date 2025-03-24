import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Order Confirmation</Heading>
      <Text>Your order has been placed successfully!</Text>
      <Button onClick={() => navigate("/products")}>Continue Shopping</Button>
    </VStack>
  );
};
