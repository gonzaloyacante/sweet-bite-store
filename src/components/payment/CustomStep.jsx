import PropTypes from "prop-types";
import {
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepSeparator,
} from "@chakra-ui/react";

export const CustomStep = ({ title }) => (
  <>
    <Step display={{ base: "flex", lg: "none" }} gap={3}>
      <StepIndicator>
        <StepStatus
          complete={<StepIcon />}
          incomplete={<StepNumber />}
          active={<StepNumber />}
        />
      </StepIndicator>
      <StepSeparator _horizontal={{ ml: "0" }} />
    </Step>
    <Step display={{ base: "none", lg: "flex" }}>
      <StepIndicator>
        <StepStatus
          complete={<StepIcon />}
          incomplete={<StepNumber />}
          active={<StepNumber />}
        />
      </StepIndicator>
      <StepTitle>{title}</StepTitle>
      <StepSeparator />
    </Step>
  </>
);

CustomStep.propTypes = {
  title: PropTypes.string.isRequired,
};
