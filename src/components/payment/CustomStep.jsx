import PropTypes from "prop-types";
import {
  Box,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
} from "@chakra-ui/react";

export const CustomStep = ({ title, description }) => (
  <Step>
    <StepIndicator>
      <StepStatus
        complete={<StepIcon />}
        incomplete={<StepNumber />}
        active={<StepNumber />}
      />
    </StepIndicator>
    <Box flexShrink="0">
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </Box>
    <StepSeparator />
  </Step>
);

CustomStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
