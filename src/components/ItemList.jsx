import Item from "./Item";

export default function ItemList({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="row">
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4 mb-3">
          <div className="card">
            <img src={prod.image} className="card-img-top" alt={prod.title} />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">${prod.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
