import { Box, Radio, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const CustomRadio = ({ children, isChecked, value, onChange, icon }) => {
  return (
    <Box
      onClick={() => onChange(value)}
      cursor="pointer"
      borderWidth="1px"
      p={4}
      borderRadius="md"
      borderColor={isChecked ? "primary.500" : undefined}
      bg={isChecked ? "background.primary" : undefined}
      boxShadow={isChecked ? "md" : "none"}
      _hover={{ borderColor: "primary.500", boxShadow: "md" }}>
      <Flex justifyContent="space-between" alignItems="center">
        <Radio
          value={value}
          isChecked={isChecked}
          onChange={() => onChange(value)}
          colorScheme="primary">
          {children}
        </Radio>
        {icon}
      </Flex>
    </Box>
  );
};

CustomRadio.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
};
