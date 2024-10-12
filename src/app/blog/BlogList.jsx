import Blog from './Blog';
import Spinner from '../../assets/spinner/spinner';

async function fetchPosts() {
  const res = await fetch('https://dummyjson.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function BlogList() {
  const { posts } = await fetchPosts();

  if (!posts || posts.length === 0) {
    return (
      <main className="main">
        <span>No posts available.</span>
      </main>
    );
  }

  return (
    <main className="main">
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
    </main>
  );
}