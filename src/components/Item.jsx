import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function Item({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>

        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product, 1)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
