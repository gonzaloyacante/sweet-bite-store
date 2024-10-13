import { Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const ActiveStep = ({ StepContent, stepDescription }) => {
  return (
    <Flex
      direction="column"
      padding={{ base: 0, md: 6 }}
      overflow="hidden"
      maxW="600px"
      w="100%"
      flex={1}
      borderWidth={{ base: "none", md: "1px" }}
      borderRadius={{ base: "none", md: "lg" }}
      boxShadow={{ base: "none", md: "md" }}>
      <Heading mb={6} size="md" textAlign="center">
        {stepDescription}
      </Heading>
      <StepContent />
    </Flex>
  );
};

ActiveStep.propTypes = {
  StepContent: PropTypes.elementType.isRequired,
  stepDescription: PropTypes.string.isRequired,
};
