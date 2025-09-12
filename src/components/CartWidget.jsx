import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { cartQuantity } = useCart(); // cantidad total en el carrito

  const quantity = cartQuantity();

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      🛒
      {quantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {quantity}
        </span>
      )}
    </Link>
  );
}
