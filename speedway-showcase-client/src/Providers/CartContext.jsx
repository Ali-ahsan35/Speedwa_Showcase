import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add car to cart, avoid duplicates by _id
  const addToCart = (car) => {
    setCartItems((prev) => {
      if (prev.find((item) => item._id === car._id)) {
        return prev; // already in cart
      }
      return [...prev, car];
    });
  };

  // Remove car from cart by _id
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
