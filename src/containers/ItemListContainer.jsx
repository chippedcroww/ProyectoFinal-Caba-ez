import { useEffect, useState } from "react";
import products from "../data/products";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API o Firebase con setTimeout
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getProducts.then((res) => setItems(res));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catálogo de productos</h2>
      <ItemList items={items} />
    </div>
  );
}
