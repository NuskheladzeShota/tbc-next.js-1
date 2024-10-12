'use client'; 
import { useRouter } from 'next/navigation';

export default function SortButton({ sortOrder }) {
  const router = useRouter();

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    router.push(`?order=${newOrder}`);
  };

  return (
    <button className='sort-button' onClick={handleSort}>
      Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
    </button>
  );
}
