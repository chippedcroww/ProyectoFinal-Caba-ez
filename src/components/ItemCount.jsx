import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-outline-secondary" onClick={decrement}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>
          +
        </button>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
