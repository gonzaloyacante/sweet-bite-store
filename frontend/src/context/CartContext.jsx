import PropTypes from "prop-types";
import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((prevItem) => prevItem.id === item.id);
      if (itemExists) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const toggleCartDrawer = useCallback(() => {
    setIsCartOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    [cartItems]
  );

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      toggleCartDrawer,
      totalItems,
      totalPrice,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      toggleCartDrawer,
      totalItems,
      totalPrice,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
