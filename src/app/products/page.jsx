'use client';
import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import './ProductCard.css';
import Spinner from '../../assets/spinner/spinner';

const productsURL = 'https://dummyjson.com/products';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch(
          `${productsURL}?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
        );
        const data = await response.json();
        setProductList(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
      } catch (error) {
        setProductList([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [currentPage]);

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

  return (
    <div>
      {loading ? (
        <div className="main">
          <span>Loading...</span>
          <Spinner />
        </div>
      ) : (
        <>
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
