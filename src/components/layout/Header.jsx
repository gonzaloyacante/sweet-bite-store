import { useState, useEffect } from "react";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Heading,
  useDisclosure,
  ScaleFade,
  Image,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import logo from "../../assets/cake-logo.png";

export const Header = ({ toggleCartDrawer }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [shouldRenderMenu, setShouldRenderMenu] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRenderMenu(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRenderMenu(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Box
      as="header"
      bg="background.secondary"
      p={4}
      position="sticky"
      top={0}
      zIndex={10}
      h="72px"
      boxShadow="lg">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="container.lg">
        <Heading
          as="h1"
          size="lg"
          color="primary.700"
          display="flex"
          alignItems="center">
          <Image src={logo} alt="Logo" boxSize="36px" mr={4} /> Sweet Bite
        </Heading>
        <Flex display={{ base: "none", md: "flex" }} spacing={4}>
          <Button variant="ghost" color="primary.700">
            Inicio
          </Button>
          <Button variant="ghost" color="primary.700">
            Productos
          </Button>
          <Button variant="ghost" color="primary.700">
            Personalizados
          </Button>
          <Button variant="ghost" color="primary.700">
            Eventos
          </Button>
          <Button variant="ghost" color="primary.700">
            Contacto
          </Button>
        </Flex>
        <Flex>
          <IconButton
            icon={<FaCartShopping />}
            variant="ghost"
            color="primary.700"
            aria-label="Carrito"
            onClick={toggleCartDrawer}
          />
          <IconButton
            icon={isOpen ? <FaXmark /> : <FaBars />}
            variant="ghost"
            aria-label="Menu"
            color="primary.700"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onToggle}
          />
        </Flex>
      </Flex>
      <ScaleFade in={isOpen} unmountOnExit>
        {shouldRenderMenu && (
          <Flex
            p={4}
            mt="14px"
            direction="column"
            spacing={2}
            bg="background.secondary"
            rounded="md"
            roundedTop={0}
            shadow="md">
            <Button variant="ghost" color="primary.700">
              Inicio
            </Button>
            <Button variant="ghost" color="primary.700">
              Productos
            </Button>
            <Button variant="ghost" color="primary.700">
              Personalizados
            </Button>
            <Button variant="ghost" color="primary.700">
              Eventos
            </Button>
            <Button variant="ghost" color="primary.700">
              Contacto
            </Button>
          </Flex>
        )}
      </ScaleFade>
    </Box>
  );
};

Header.propTypes = {
  toggleCartDrawer: PropTypes.func.isRequired,
};
