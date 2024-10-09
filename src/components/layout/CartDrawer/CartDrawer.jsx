import { useNavigate } from "react-router-dom";
import { useMemo, useCallback } from "react";

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
import React from "react";

const MemoizedCartDrawerItem = React.memo(CartDrawerItem);
const MemoizedCartDrawerFooter = React.memo(CartDrawerFooter);

export const CartDrawer = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    toggleCartDrawer,
  } = useCart();
  const showToast = useToastNotification();

  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    [cartItems]
  );

  const handleRemoveItem = useCallback(
    (id) => {
      removeFromCart(id);
      showToast({
        title: "Producto eliminado",
        description: "El producto ha sido eliminado del carrito",
        status: "success",
      });
    },
    [removeFromCart, showToast]
  );

  const handleCheckout = useCallback(() => {
    showToast({
      title: "Procesando compra",
      description: "Redirigiendo al proceso de pago...",
      status: "info",
    });

    toggleCartDrawer();

    navigate("/payment");
  }, [showToast, navigate, toggleCartDrawer]);

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
                <MemoizedCartDrawerItem
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
        {cartItems.length > 0 && (
          <MemoizedCartDrawerFooter
            totalPrice={totalPrice}
            totalItems={totalItems}
            toggleCartDrawer={toggleCartDrawer}
            handleCheckout={handleCheckout}
          />
        )}
      </DrawerContent>
    </Drawer>
  );
};
