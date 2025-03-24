import { useState } from "react";
import PropTypes from "prop-types";
import {
  VStack,
  Text,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import {
  FaApplePay,
  FaGooglePay,
  FaPaypal,
  FaLock,
  FaRegCreditCard,
} from "react-icons/fa6";

const PaymentOption = ({
  value,
  icon,
  text,
  description,
  isSelected,
  onSelect,
}) => (
  <Box
    borderWidth={1}
    borderRadius="md"
    p={4}
    borderColor={isSelected ? "primary.500" : undefined}
    bg={isSelected ? "background.primary" : undefined}
    _hover={{ borderColor: "primary.500", cursor: "pointer" }}
    onClick={() => onSelect(value)}>
    <Flex justifyContent="space-between" alignItems="center" h={6}>
      <Radio
        value={value}
        colorScheme="primary"
        isChecked={isSelected}
        onClick={(e) => e.stopPropagation()}
        onChange={() => onSelect(value)}>
        {text}
      </Radio>
      {icon}
    </Flex>
    {isSelected && description && (
      <Text ml={6} mt={2} fontSize="sm" color="gray.600">
        {description}
      </Text>
    )}
  </Box>
);

PaymentOption.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <VStack spacing={6} align="stretch" width="100%">
      <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
        <VStack align="stretch" spacing={3}>
          <PaymentOption
            value="creditCard"
            icon={<Icon as={FaRegCreditCard} boxSize={6} />}
            text="Pagar con tarjeta de crédito/débito"
            isSelected={paymentMethod === "creditCard"}
            onSelect={setPaymentMethod}
          />
          {paymentMethod === "creditCard" && (
            <VStack mt={4} spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel>Nombre en la tarjeta</FormLabel>
                <Input placeholder="Olivia Juliet" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Número de la tarjeta</FormLabel>
                <Input placeholder="1234 1234 1234 1234" />
              </FormControl>
              <HStack>
                <FormControl isRequired>
                  <FormLabel>Expiración</FormLabel>
                  <Input placeholder="06/2026" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>CVV</FormLabel>
                  <Input placeholder="•••" type="password" maxLength={3} />
                </FormControl>
              </HStack>
            </VStack>
          )}

          <Divider />

          <PaymentOption
            value="applePay"
            icon={<Icon as={FaApplePay} boxSize={10} />}
            text="Apple Pay"
            description="Pago rápido y seguro con Apple Pay."
            isSelected={paymentMethod === "applePay"}
            onSelect={setPaymentMethod}
          />

          <PaymentOption
            value="googlePay"
            icon={<Icon as={FaGooglePay} boxSize={10} />}
            text="Google Pay"
            description="Pago sencillo y seguro con Google Pay."
            isSelected={paymentMethod === "googlePay"}
            onSelect={setPaymentMethod}
          />

          <PaymentOption
            value="paypal"
            icon={<Icon as={FaPaypal} boxSize={6} />}
            text="PayPal"
            description="Serás redirigido al sitio web de PayPal después de enviar tu pedido."
            isSelected={paymentMethod === "paypal"}
            onSelect={setPaymentMethod}
          />
        </VStack>
      </RadioGroup>

      <Divider />

      <HStack spacing={4} color="text.primary" px={4}>
        <Icon as={FaLock} />
        <Text fontSize="sm">
          Protegemos su información de pago mediante encriptación para brindar
          seguridad a nivel bancario.
        </Text>
      </HStack>
    </VStack>
  );
};
