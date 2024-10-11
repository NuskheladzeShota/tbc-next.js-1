import "./Item.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <img src={item.img} alt={item.name} className="item-img" />
      <h4 className="item-name">{item.name}</h4>
      <p className="item-desc">{item.description}</p>
      <button className="button">Add to Cart</button>
    </div>
  );
}
