import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Text,
  Image,
  IconButton,
  Flex,
  Divider,
  VStack,
  HStack,
  useToast,
  Badge,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  removeFromCart,
  updateQuantity,
}) => {
  const toast = useToast();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del carrito",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    toast({
      title: "Procesando compra",
      description: "Redirigiendo al proceso de pago...",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
    // Aquí iría la lógica para redirigir al proceso de pago
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerCloseButton />
      <DrawerContent bg="background">
        <DrawerHeader
          minH="72px"
          borderBottomWidth="1px"
          bg="background.secondary">
          <Flex w="100%" align="center" justifyContent="space-between">
            <Flex h="100%" align="center" color="primary.700">
              <Icon as={FaShoppingCart} />
              <Text ml={2}>Carrito de Compras</Text>
            </Flex>
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          {cartItems.length > 0 ? (
            <VStack spacing={4} align="stretch">
              {cartItems.map((item) => (
                <Flex
                  key={item.id}
                  align="center"
                  justify="space-between"
                  p={2}
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="sm">
                  <Image
                    rounded="md"
                    src={item.image}
                    alt={item.name}
                    boxSize="60px"
                    objectFit="cover"
                    mr={3}
                  />
                  <Box flex="1">
                    <Text fontWeight="bold" fontSize="md">
                      {item.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </Text>
                  </Box>
                  <HStack>
                    <Tooltip label="Disminuir cantidad" placement="top">
                      <IconButton
                        size="sm"
                        icon={<Text fontSize="xl">-</Text>}
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        isDisabled={item.quantity === 1}
                        variant="outline"
                        colorScheme="brand"
                      />
                    </Tooltip>
                    <Text fontWeight="bold">{item.quantity}</Text>
                    <Tooltip label="Aumentar cantidad" placement="top">
                      <IconButton
                        size="sm"
                        icon={<Text fontSize="xl">+</Text>}
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        variant="outline"
                        colorScheme="brand"
                      />
                    </Tooltip>
                    <Tooltip label="Eliminar producto" placement="top">
                      <IconButton
                        aria-label="Eliminar"
                        icon={<FaTrash />}
                        onClick={() => handleRemoveItem(item.id)}
                        variant="ghost"
                        colorScheme="red"
                      />
                    </Tooltip>
                  </HStack>
                </Flex>
              ))}
            </VStack>
          ) : (
            <Flex direction="column" align="center" justify="center" h="100%">
              <FaShoppingCart size="64px" color="gray.300" />
              <Text mt={4} fontSize="lg" color="gray.500">
                Tu carrito está vacío
              </Text>
              <Button mt={4} colorScheme="brand" onClick={onClose}>
                Continuar Comprando
              </Button>
            </Flex>
          )}
        </DrawerBody>
        {cartItems.length > 0 && (
          <>
            <Divider />
            <DrawerFooter flexDirection="column">
              <Flex w="100%" justify="space-between" mb={4} align="center">
                <Text fontWeight="bold" fontSize="lg">
                  Total:
                </Text>
                {cartItems.length >= 5 && (
                  <Badge colorScheme="green" p={2} borderRadius="md">
                    ¡Envío gratis en tu pedido!
                  </Badge>
                )}
                <Text fontWeight="bold" fontSize="lg" color="brand.500">
                  ${totalPrice}
                </Text>
              </Flex>
              <Flex w="100%" justify="space-between">
                <Button
                  variant="outline"
                  colorScheme="brand"
                  onClick={onClose}
                  flex={1}
                  mr={2}>
                  Seguir Comprando
                </Button>
                <Button
                  colorScheme="brand"
                  onClick={handleCheckout}
                  flex={1}
                  ml={2}>
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
