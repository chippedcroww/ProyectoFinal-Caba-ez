import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error cargando productos: ", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Catálogo de productos</h2>
      <ItemList products={products} />
    </div>
  );
}
