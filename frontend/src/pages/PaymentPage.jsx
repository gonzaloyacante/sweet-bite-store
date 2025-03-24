import { useState } from "react";
import { Stepper, Flex, Button } from "@chakra-ui/react";
import { ShippingInfo } from "../components/payment/ShippingInfo.jsx";
import { ShippingMethod } from "../components/payment/ShippingMethod";
import { PaymentMethod } from "../components/payment/PaymentMethod";
import { OrderReview } from "../components/payment/OrderReview.jsx";
import { OrderConfirmation } from "../components/payment/OrderConfirmation";
import { CustomStep } from "../components/payment/CustomStep";
import { ActiveStep } from "../components/payment/ActiveStep";

const steps = [
  {
    title: "Información de envío",
    description: "Ingresa tus datos para realizar el envío",
  },
  { title: "Método de envío", description: "Selecciona una opción de envío" },
  { title: "Método de pago", description: "Selecciona el método de pago" },
  { title: "Revisión del pedido", description: "Revisa tu pedido" },
  { title: "Confirmación", description: "Confirma tu orden" },
];

const stepComponents = [
  ShippingInfo,
  ShippingMethod,
  PaymentMethod,
  OrderReview,
  OrderConfirmation,
];

export const PaymentPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const StepContent = stepComponents[activeStep];

  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Flex
      padding={4}
      alignItems="center"
      justifyContent="center"
      direction="column"
      minH="calc(100vh - 72px)"
      maxW="1200px"
      mx="auto"
      gap={6}>
      <Stepper index={activeStep} width="full" size="lg" colorScheme="primary">
        {steps.map((step, index) => (
          <CustomStep key={index} title={step.title} />
        ))}
      </Stepper>
      <ActiveStep
        activeStep={activeStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        StepContent={StepContent}
        stepDescription={steps[activeStep].description}
      />
      {activeStep < 4 && (
        <Flex w="100%" gap={4}>
          <Button
            onClick={handlePrev}
            isDisabled={activeStep === 0}
            variant="outline"
            flex={1}>
            Anterior
          </Button>
          <Button flex={1} onClick={handleNext}>
            {activeStep === 3 ? "Finalizar" : "Siguiente"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
