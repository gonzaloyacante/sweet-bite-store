import PropTypes from "prop-types";

import {
  DrawerFooter,
  Flex,
  Button,
  Text,
  Badge,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";

export const CartDrawerFooter = ({
  totalPrice,
  totalItems,
  toggleCartDrawer,
  handleCheckout,
}) => {
  const freeShippingText = useBreakpointValue({
    base: "¡Envío gratis!",
    sm: "¡Envío gratis en tu pedido!",
  });

  return (
    <>
      {totalItems > 0 && (
        <>
          <Divider boxShadow="md" />
          <DrawerFooter flexDirection="column" padding={{ base: 2, sm: 4 }}>
            <Flex w="100%" justify="space-between" align="center" mb={2} px={4} h="36px">
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", sm: "lg" }}
                color="text.primary">
                Total:
              </Text>
              {totalItems >= 5 && (
                <Badge colorScheme="green" p={2} borderRadius="md">
                  {freeShippingText}
                </Badge>
              )}
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", sm: "lg" }}
                color="text.primary">
                ${totalPrice}
              </Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between" gap={3} px={4}>
              <Button
                size="sm"
                variant="outline"
                onClick={toggleCartDrawer}
                flex={1}>
                Seguir Comprando
              </Button>
              <Button size="sm" onClick={() => handleCheckout()} flex={1}>
                Proceder al Pago
              </Button>
            </Flex>
          </DrawerFooter>
        </>
      )}
    </>
  );
};

CartDrawerFooter.propTypes = {
  totalPrice: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  toggleCartDrawer: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};
