import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <div className="d-flex align-items-center" id="cart-widget-debug">
      <Link to="/cart" className="btn btn-outline-primary position-relative">
        🛒
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}
