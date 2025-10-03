import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} (x{item.quantity})
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-sm btn-danger"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total de artículos:</strong> {totalItems}
      </p>

      <div className="d-flex gap-2">
        <button onClick={clearCart} className="btn btn-warning">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
}
