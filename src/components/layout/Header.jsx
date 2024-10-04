import { FaCartShopping, FaHeart, FaBars, FaXmark } from "react-icons/fa6";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Heading,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      bg="pink.200"
      p={4}
      position="sticky"
      top={0}
      zIndex={10}
      h="70px">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="container.lg">
        <Heading as="h1" size="lg" color="pink.700">
          Dulce Rosa
        </Heading>
        <Flex display={{ base: "none", md: "flex" }} spacing={4}>
          <Button variant="ghost" color="pink.700">
            Inicio
          </Button>
          <Button variant="ghost" color="pink.700">
            Productos
          </Button>
          <Button variant="ghost" color="pink.700">
            Personalizados
          </Button>
          <Button variant="ghost" color="pink.700">
            Eventos
          </Button>
          <Button variant="ghost" color="pink.700">
            Contacto
          </Button>
        </Flex>
        <Flex>
          <IconButton
            icon={<FaHeart />}
            variant="ghost"
            color="pink.700"
            aria-label="Favoritos"
          />
          <IconButton
            icon={<FaCartShopping />}
            variant="ghost"
            color="pink.700"
            aria-label="Carrito"
          />
          <IconButton
            icon={isOpen ? <FaXmark /> : <FaBars />}
            variant="ghost"
            aria-label="Menu"
            color="pink.700"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onToggle}
          />
        </Flex>
      </Flex>
      <ScaleFade in={isOpen} style={{ zIndex: -1 }}>
        <Flex
          p={4}
          mt="14px"
          direction="column"
          spacing={2}
          display={{ base: "flex", md: "none" }}
          bg="pink.100"
          rounded="md"
          shadow="md">
          <Button variant="ghost" color="pink.700">
            Inicio
          </Button>
          <Button variant="ghost" color="pink.700">
            Productos
          </Button>
          <Button variant="ghost" color="pink.700">
            Personalizados
          </Button>
          <Button variant="ghost" color="pink.700">
            Eventos
          </Button>
          <Button variant="ghost" color="pink.700">
            Contacto
          </Button>
        </Flex>
      </ScaleFade>
    </Box>
  );
};
