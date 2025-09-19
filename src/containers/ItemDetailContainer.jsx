import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams(); // capturamos el ID desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // simulamos consulta como si fuera Firebase
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find((p) => p.id === parseInt(id));
        resolve(found);
      }, 800);
    });

    getProduct.then((res) => setProduct(res));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }

  return (
    <div className="container mt-4">
      <ItemDetail product={product} />
    </div>
  );
}
