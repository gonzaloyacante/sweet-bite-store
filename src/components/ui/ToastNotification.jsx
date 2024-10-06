import { useToast } from "@chakra-ui/react";

export const useToastNotification = () => {
  const toast = useToast();

  const showToast = ({ title, description, status, duration = 3000 }) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
  };

  return showToast;
};
