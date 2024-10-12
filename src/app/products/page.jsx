'use client';
import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import './ProductCard.css';
import Spinner from '../../assets/spinner/spinner';

const productsURL = 'https://dummyjson.com/products';

const SortButton = ({ onSort, sortOrder }) => {
  return (
    <button className='sort-button' onClick={onSort}>
      Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
    </button>
  );
};

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const itemsPerPage = 9;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = debouncedQuery
      ? `https://dummyjson.com/products/search?q=${debouncedQuery}`
      : `${productsURL}?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}&sortBy=title&order=${sortOrder}`;
      
      const response = await fetch(url)
      const data = await response.json();
      setProductList(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductList([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async (order) => {
    try {
      const response = await fetch(`https://dummyjson.com/products?sortBy=title&order=${order}`);
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      console.error('Error fetching sorted data:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, sortOrder, debouncedQuery]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      {loading ? (
        <div className="main">
          <span>Loading...</span>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="sort-container">
            <SortButton onSort={handleSort} sortOrder={sortOrder} />
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={handleSearch}
              className='search-input'
            />
          </div>
          <ProductList productList={productList} />
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
