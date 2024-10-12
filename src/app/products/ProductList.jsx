import { ProductCard } from './ProductCard';
import '../../Content/Content.css';
import '../../Content/Item/Item.css';

export const ProductList = ({ productList }) => {
  return (
    <main className="main">
      <h2>Item Shop</h2>
      <div className="items">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
