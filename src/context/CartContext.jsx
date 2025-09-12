import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    const exists = cart.find((prod) => prod.id === item.id);
    if (exists) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((prod) => prod.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function cartQuantity() {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  }

  function cartTotal() {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
