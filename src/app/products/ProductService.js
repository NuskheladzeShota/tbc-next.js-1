const productsURL = 'https://dummyjson.com/products';

export async function fetchSearchedProducts(searchQuery = '', currentPage = 1, sortOrder = 'asc', itemsPerPage = 9) {
  const searchURL = searchQuery ? `/search?q=${searchQuery}` : `?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}&sortBy=title&order=${sortOrder}`;
  const response = await fetch(`${productsURL}${searchURL}`);
  const data = await response.json();

  return {
    products: data.products,
    totalPages: Math.ceil(data.total / itemsPerPage),
  };
}
