import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  IconButton,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

export const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, image } = product;
  const [tooltipLabel, setTooltipLabel] = useState("Agregar al carrito");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const showTooltip = useBreakpointValue({ base: false, md: true });

  const handleAddToCart = () => {
    addToCart(product);
    setTooltipLabel("Agregado");
    setIsTooltipOpen(true);
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 1500);
  };

  return (
    <Card
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="background.primary"
      boxShadow="lg"
      border="none"
      height="100%">
      <Image
        src={image}
        alt={name}
        height={{ base: "150px", md: "200px" }}
        width="100%"
        objectFit="cover"
      />
      <CardBody p={3}>
        <Text
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          color="primary.700"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated>
          {name}
        </Text>
        <Text mt={2} color="text.secondary" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      </CardBody>
      <CardFooter
        pt={1}
        p={3}
        justifyContent="space-between"
        alignItems="center">
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", md: "xl" }}
          color="primary.500">
          ${price.toFixed(2)}
        </Text>
        <Tooltip
          label={tooltipLabel}
          isOpen={isTooltipOpen}
          hasArrow
          placement="top"
          isDisabled={!showTooltip}>
          <IconButton
            variant="outline"
            borderColor="primary.500"
            color="primary.500"
            aria-label="Agregar al carrito"
            fontSize="20px"
            icon={<FaCartShopping />}
            onClick={handleAddToCart}
            _hover={{ bg: "background.secondary" }}
          />
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

ProductCard.propTypes = {
  product: productShape.isRequired,
  addToCart: PropTypes.func.isRequired,
};
