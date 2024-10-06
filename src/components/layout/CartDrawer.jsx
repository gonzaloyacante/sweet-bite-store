import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  Button,
  Box,
  Text,
  Image,
  IconButton,
  Flex,
  Divider,
  VStack,
  HStack,
  Tooltip,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaTrash, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import { useToastNotification } from "../ui/ToastNotification";

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  updateQuantity,
}) => {
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

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    showToast({
      title: "Procesando compra",
      description: "Redirigiendo al proceso de pago...",
      status: "info",
    });
    // Aquí iría la lógica para redirigir al proceso de pago
  };

  const freeShippingText = useBreakpointValue({
    base: "¡Envío gratis!",
    sm: "¡Envío gratis en tu pedido!",
  });

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerCloseButton />
      <DrawerContent bg="background.light">
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
              onClick={onClose}>
              Cerrar
            </Button>
          </Flex>
        </DrawerHeader>
        <DrawerBody padding={{ base: 2, md: 4 }}>
          {cartItems.length > 0 ? (
            <VStack spacing={{ base: 2, md: 4 }} align="stretch">
              {cartItems.map((item) => (
                <Flex
                  key={item.id}
                  p={2}
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="md"
                  align="center"
                  justify="space-between">
                  <Image
                    rounded="md"
                    src={item.image}
                    alt={item.name}
                    h={{ base: "64px", md: "68px" }}
                    objectFit="cover"
                    mr={2}
                  />
                  <Box
                    flex="1"
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center">
                    <Text fontWeight="bold" fontSize="md" color="text.primary">
                      {item.name}
                    </Text>
                    <Flex
                      align="center"
                      justifyContent="space-between"
                      w="100%"
                      mt={{ base: 2, sm: 0 }}>
                      <Text fontSize="sm" color="text.secondary">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </Text>
                      <HStack>
                        <Tooltip label="Disminuir cantidad" placement="top">
                          <IconButton
                            size={{ base: "xs", md: "sm" }}
                            icon={<FaMinus />}
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            isDisabled={item.quantity === 1}
                            variant="outline"
                          />
                        </Tooltip>
                        <Text fontWeight="bold">{item.quantity}</Text>
                        <Tooltip label="Aumentar cantidad" placement="top">
                          <IconButton
                            size={{ base: "xs", md: "sm" }}
                            icon={<FaPlus />}
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            variant="outline"
                          />
                        </Tooltip>
                        <Tooltip label="Eliminar producto" placement="top">
                          <IconButton
                            aria-label="Eliminar"
                            icon={<FaTrash />}
                            onClick={() => handleRemoveItem(item.id)}
                            variant="ghost"
                            color="primary.500"
                            size={{ base: "xs", sm: "md" }}
                          />
                        </Tooltip>
                      </HStack>
                    </Flex>
                  </Box>
                </Flex>
              ))}
            </VStack>
          ) : (
            <Flex direction="column" align="center" justify="center" h="100%">
              <FaShoppingCart size="64px" color="gray.300" />
              <Text mt={4} fontSize="lg" color="gray.500">
                Tu carrito está vacío
              </Text>
              <Button mt={4} onClick={onClose}>
                Continuar Comprando
              </Button>
            </Flex>
          )}
        </DrawerBody>
        {cartItems.length > 0 && (
          <>
            <Divider boxShadow="md" />
            <DrawerFooter flexDirection="column" padding={{ base: 2, sm: 4 }}>
              <Flex
                w="100%"
                justify="space-between"
                align="center"
                mb={2}
                px={4}>
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
                <Button size="sm" variant="outline" onClick={onClose} flex={1}>
                  Seguir Comprando
                </Button>
                <Button size="sm" onClick={handleCheckout} flex={1}>
                  Proceder al Pago
                </Button>
              </Flex>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
});

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(productShape).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};
