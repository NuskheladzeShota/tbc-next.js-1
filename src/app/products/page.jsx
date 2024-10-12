import { fetchSearchedProducts } from './ProductService';
import { ProductList } from './ProductList';
import SearchBar from './SearchBar';
import './ProductCard.css';

export default async function Products({ searchParams }) {
  const currentPage = parseInt(searchParams.page || 1);
  const sortOrder = searchParams.order || 'asc';
  const searchQuery = searchParams.q || '';
  const itemsPerPage = 9;

  const { products, totalPages } = await fetchSearchedProducts(searchQuery, currentPage, sortOrder, itemsPerPage);

  const buildUrl = (page, order, query) => {
    const params = new URLSearchParams({ page, order, q: query });
    return `?${params.toString()}`;
  };

  return (
    <div>
      <div className="sort-container">
        <a href={buildUrl(currentPage, sortOrder === 'asc' ? 'desc' : 'asc', searchQuery)}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </a>
        <SearchBar searchQuery={searchQuery} />
      </div>
      <ProductList productList={products} />
      <div className="pagination">
        {currentPage > 1 && (
          <a href={buildUrl(currentPage - 1, sortOrder, searchQuery)}>Previous</a>
        )}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <a href={buildUrl(currentPage + 1, sortOrder, searchQuery)}>Next</a>
        )}
      </div>
    </div>
  );
}
