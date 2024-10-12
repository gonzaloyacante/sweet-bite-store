import { useState } from "react";
import { Box, Stepper, Flex, Button } from "@chakra-ui/react";
import { OrderSummary } from "../components/payment/OrderSummary";
import { ShippingInfo } from "../components/payment/ShippingInfo";
import { PaymentMethod } from "../components/payment/PaymentMethod";
import { OrderConfirmation } from "../components/payment/OrderConfirmation";
import { CustomStep } from "../components/payment/CustomStep";

const steps = [
  { title: "Resumen", description: "Revisa tu pedido" },
  { title: "Envío", description: "Datos de envío" },
  { title: "Pago", description: "Método de pago" },
  { title: "Confirmación", description: "Finalizar pedido" },
];

const stepComponents = [
  OrderSummary,
  ShippingInfo,
  PaymentMethod,
  OrderConfirmation,
];

export const PaymentPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const StepContent = stepComponents[activeStep];

  const handleNext = () =>
    activeStep < steps.length - 1 && setActiveStep((prev) => prev + 1);
  const handlePrev = () => activeStep > 0 && setActiveStep((prev) => prev - 1);

  return (
    <Flex
      direction="column"
      padding={4}
      overflow="auto"
      minH="calc(100vh - 72px)">
      <Stepper index={activeStep} marginBottom={6}>
        {steps.map((step, index) => (
          <CustomStep
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </Stepper>
      <Box flex="1">
        <StepContent />
      </Box>
      {activeStep !== 3 && (
        <Flex w="100%" justifyContent="space-between" gap={3}>
          <Button
            onClick={handlePrev}
            isDisabled={activeStep === 0}
            variant="outline"
            flex={1}>
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            isDisabled={activeStep === steps.length - 1}
            flex={1}>
            {activeStep === steps.length - 2 ? "Finalizar" : "Siguiente"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
