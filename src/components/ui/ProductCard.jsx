import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { FaCartShopping } from "react-icons/fa6";

export const ProductCard = ({ name, description, price, image }) => {
  return (
    <Card
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="pink.100"
      boxShadow="md"
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
          color="pink.700"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated>
          {name}
        </Text>
        <Text mt={2} color="pink.500" fontSize={{ base: "sm", md: "md" }}>
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
          color="pink.700">
          ${price.toFixed(2)}
        </Text>
        <IconButton
          variant="outline"
          colorScheme="primary"
          aria-label="Agregar al carrito"
          fontSize="20px"
          icon={<FaCartShopping color="pink.700" />}
        />
      </CardFooter>
    </Card>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
