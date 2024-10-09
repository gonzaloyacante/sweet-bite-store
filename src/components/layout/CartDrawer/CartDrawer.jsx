import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { CartDrawerHeader } from "./CartDrawerHeader";
import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerFooter } from "./CartDrawerFooter";

import useCart from "../../../hooks/useCart";
import { useToastNotification } from "../../ui/ToastNotification";

export const CartDrawer = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    toggleCartDrawer,
  } = useCart();
  const showToast = useToastNotification();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    showToast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del carrito",
      status: "success",
    });
  };

  const handleCheckout = () => {
    showToast({
      title: "Procesando compra",
      description: "Redirigiendo al proceso de pago...",
      status: "info",
    });
    // Aquí iría la lógica para redirigir al proceso de pago
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      placement="right"
      onClose={toggleCartDrawer}
      size="md">
      <DrawerOverlay />
      <DrawerCloseButton />
      <DrawerContent bg="background.light">
        <CartDrawerHeader toggleCartDrawer={toggleCartDrawer} />
        <DrawerBody padding={{ base: 2, md: 4 }}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartDrawerItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </>
          ) : (
            <Flex direction="column" align="center" justify="center" h="100%">
              <Text mt={4} fontSize="lg" color="gray.500">
                Tu carrito está vacío
              </Text>
              <Button mt={4} onClick={toggleCartDrawer}>
                Continuar Comprando
              </Button>
            </Flex>
          )}
        </DrawerBody>
        <CartDrawerFooter
          totalPrice={totalPrice}
          totalItems={totalItems}
          toggleCartDrawer={toggleCartDrawer}
          handleCheckout={handleCheckout}
        />
      </DrawerContent>
    </Drawer>
  );
};
