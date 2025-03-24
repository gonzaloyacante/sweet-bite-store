import PropTypes from "prop-types";

import {
  Flex,
  Image,
  Box,
  Text,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export const CartDrawerItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <Flex
      p={2}
      my={2}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="sm"
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
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                isDisabled={item.quantity === 1}
                variant="outline"
              />
            </Tooltip>
            <Text fontWeight="bold">{item.quantity}</Text>
            <Tooltip label="Aumentar cantidad" placement="top">
              <IconButton
                size={{ base: "xs", md: "sm" }}
                icon={<FaPlus />}
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                variant="outline"
              />
            </Tooltip>
            <Tooltip label="Eliminar producto" placement="top">
              <IconButton
                aria-label="Eliminar"
                icon={<FaTrash />}
                onClick={() => onRemove(item.id)}
                variant="ghost"
                color="primary.500"
                size={{ base: "xs", sm: "md" }}
              />
            </Tooltip>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

CartDrawerItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};
