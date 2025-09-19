import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((prod) => (
        <div className="col-md-3 mb-4" key={prod.id}>
          <Item item={prod} />
        </div>
      ))}
    </div>
  );
}
