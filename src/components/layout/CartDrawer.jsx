import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";

export const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Carrito</DrawerHeader>
        <DrawerBody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id}>
                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
              </div>
            ))
          ) : (
            <div>El carrito está vacío</div>
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button colorScheme="blue">Comprar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(productShape).isRequired,
};
