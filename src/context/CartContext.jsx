import { createContext, useContext, useState } from "react";

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Creamos un hook para usarlo fácil
export function useCart() {
  return useContext(CartContext);
}

// 3. Creamos el proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar un producto
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // Ver si ya está en el carrito
      const itemInCart = prevCart.find((item) => item.id === product.id);

      if (itemInCart) {
        // Si ya existe, actualizamos cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Si no existe, lo agregamos nuevo
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Eliminar un producto
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Total de items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 👇 debajo de totalItems
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice, // 👈 lo agregamos aquí
      }}
    >
      {children}
    </CartContext.Provider>
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
