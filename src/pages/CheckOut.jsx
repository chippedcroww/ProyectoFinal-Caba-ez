import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart, totalItems } = useCart();

  // Estado para los datos del comprador
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Estado para la orden generada
  const [orderId, setOrderId] = useState(null);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    // Mock de orden
    const mockOrder = {
      id: Math.floor(Math.random() * 1000000), // número aleatorio
      buyer,
      items: cart,
      totalItems,
      date: new Date().toLocaleString(),
    };

    // Guardamos el ID de la orden
    setOrderId(mockOrder.id);

    // Vaciamos el carrito
    clearCart();
  };

  // Si ya generamos la orden, mostramos confirmación
  if (orderId) {
    return (
      <div className="container mt-4">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  // Si todavía no generamos orden → mostramos formulario
  return (
    <div className="container mt-4">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Confirmar compra
        </button>
      </form>
    </div>
  );
}
