import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>

      {/* 👇 ItemCount conectado con el carrito */}
      <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
}
