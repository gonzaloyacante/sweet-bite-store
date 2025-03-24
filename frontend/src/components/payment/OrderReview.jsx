import { VStack, Text, Divider, Box, Flex, Spacer } from "@chakra-ui/react";
import useCart from "../../hooks/useCart";

export const OrderReview = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <VStack align="stretch">
      {cartItems.map((item) => (
        <Box key={item.id} p={4} borderRadius="md" boxShadow="sm">
          <Flex>
            <Text fontWeight="medium">
              {item.name} x {item.quantity}
            </Text>
            <Spacer />
            <Box textAlign="end">
              <Text fontWeight="bold">${item.price * item.quantity}</Text>
              {item.quantity > 1 && (
                <Text fontSize="sm" color="gray.600" ml="auto">
                  (${item.price} x {item.quantity})
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
      ))}
      <Divider />
      <Flex fontSize="lg" fontWeight="bold" px={4}>
        <Text>Total:</Text>
        <Spacer />
        <Text>${totalPrice}</Text>
      </Flex>
    </VStack>
  );
};
