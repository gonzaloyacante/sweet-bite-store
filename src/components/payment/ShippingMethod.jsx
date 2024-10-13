import { useState } from "react";
import PropTypes from "prop-types";
import { RadioGroup, Stack, Box, Text } from "@chakra-ui/react";
import { CustomRadio } from "./CustomRadio";

export const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");

  const shippingOptions = [
    {
      value: "standard",
      price: "Gratis",
      name: "Standard",
      duration: "(5 - 7 días)",
    },
    {
      value: "express",
      price: "$9.99",
      name: "Express",
      duration: "(2-3 días)",
    },
  ];

  return (
    <RadioGroup
      onChange={setShippingMethod}
      value={shippingMethod}
      colorScheme="primary">
      <Stack direction="column" spacing={4}>
        {shippingOptions.map((option) => (
          <CustomRadio
            key={option.value}
            value={option.value}
            isChecked={shippingMethod === option.value}
            onChange={setShippingMethod}>
            <Box ml={3}>
              <Text fontWeight="bold">{option.price}</Text>
              <Text>{option.name}</Text>
              <Text>{option.duration}</Text>
            </Box>
          </CustomRadio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

CustomRadio.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
