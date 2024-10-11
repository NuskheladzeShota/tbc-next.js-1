'use client';

import { useEffect } from 'react';
import { useState } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return { posts, loading };
};

export default usePosts;
