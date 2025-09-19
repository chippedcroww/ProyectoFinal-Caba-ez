import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="card h-100">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Precio: ${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
