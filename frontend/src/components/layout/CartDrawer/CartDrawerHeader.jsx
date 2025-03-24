import PropTypes from "prop-types";

import { DrawerHeader, Flex, Icon, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const CartDrawerHeader = ({ toggleCartDrawer }) => (
  <DrawerHeader
    minH="72px"
    borderBottomWidth="1px"
    bg="background.secondary"
    boxShadow="lg">
    <Flex w="100%" h="100%" align="center" justifyContent="space-between">
      <Flex alignItems="center" color="primary.700">
        <Icon as={FaShoppingCart} />
        <Text fontSize={{ base: "md", sm: "lg" }} ml={2}>
          Carrito de Compras
        </Text>
      </Flex>
      <Button
        size={{ base: "sm", sm: "md" }}
        variant="outline"
        onClick={() => toggleCartDrawer()}>
        Cerrar
      </Button>
    </Flex>
  </DrawerHeader>
);

CartDrawerHeader.propTypes = {
  toggleCartDrawer: PropTypes.func.isRequired,
};
