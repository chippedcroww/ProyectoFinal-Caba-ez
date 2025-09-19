import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Carrito vacío 🛒</h2>
        <p>Agrega productos para verlos aquí.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">Cantidad: {item.quantity}</small>
            </div>
            <span className="text-muted">${item.price * item.quantity}</span>
            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => removeFromCart(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* 👇 mostramos total */}
      <h4 className="mb-3">Total: ${totalPrice}</h4>

      <button className="btn btn-warning me-2" onClick={clearCart}>
        Vaciar carrito
      </button>
      <button className="btn btn-success">Ir a pagar</button>
    </div>
  );
}
