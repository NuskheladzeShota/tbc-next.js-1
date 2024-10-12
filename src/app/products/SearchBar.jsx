'use client'; // Mark this as a client component
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ searchQuery }) {
  const [query, setQuery] = useState(searchQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery !== searchQuery) {
      router.push(`?q=${debouncedQuery}`);
    }
  }, [debouncedQuery, searchQuery, router]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearchChange}
      placeholder="Search for products"
      className="search-input"
    />
  );
}
