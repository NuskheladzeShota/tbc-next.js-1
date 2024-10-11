import './assignment-3.css';

const obj = {
  id: '10002',
  name: 'Eco-Friendly Water Bottle',
  description: 'Stay hydrated with our durable, eco-friendly water bottle.',
  price: 14.99,
  currency: 'USD',
  imageURL: 'https://example.com/images/product-10002.jpg',
};

export default function Assignment3() {
  const tableBody = Object.keys(obj).reduce(
    (acc, key, index) => [
      ...acc,
      <tr key={key}>
        <td>{key}</td>
        <td>{obj[key]}</td>
        <td>{index}</td>
      </tr>,
    ],
    []
  );

  const list = (
    <table>
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
          <th>index</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );

  return <main className="main">{list}</main>;
}
