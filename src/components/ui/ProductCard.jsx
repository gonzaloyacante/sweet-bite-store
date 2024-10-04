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
      border="none">
      <Image src={image} alt={name} height="200" width="300" />

      <CardBody p={3}>
        <Text
          as="h3"
          fontSize="xl"
          color="pink.700"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated>
          {name}
        </Text>

        <Text mt={2} color="pink.500">
          {description}
        </Text>
      </CardBody>
      <CardFooter
        pt={1}
        p={3}
        justifyContent="space-between"
        alignItems="center">
        <Text fontWeight="bold" fontSize="xl" color="pink.700">
          ${price.toFixed(2)}
        </Text>
        <IconButton
          variant="outline"
          colorScheme="primary"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<FaCartShopping />}
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
