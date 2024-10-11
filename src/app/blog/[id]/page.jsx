import '../blog.css';
const fetchPost = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
};
// const renderStars = (rating) => {
//   const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
//   const fullStars = Math.floor(roundedRating); // Get the full star count
//   const hasHalfStar = roundedRating - fullStars === 0.5; // Check if there's a half star
//   const stars = [];

//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
//   }

//   if (hasHalfStar) {
//     stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalfAlt} />);
//   }
//   return stars;
// };
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
};

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/posts?limit=0&skip=0'); // Adjust the URL if needed
  const { posts } = await res.json(); // Assuming the API returns an array of products
  return posts.map((post) => ({
    id: post.id.toString(), // Ensure id is a string
  }));
}
export default async function ProductPage({ params }) {
  const { id } = params; // Get the ID from URL parameters
  const blog = await fetchPost(id); // Fetch product details based on ID

  return (
    <div className="main">
      <div className="blog-item-single">
        <div className="blog-content">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-preview">{blog.body}</p>

          <strong>Tags:</strong>
          <ul className="tags">
            {blog.tags.map((tag) => (
              <li key={tag}>
                <span className="blog-tags">{tag}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '10px' }}>
            <button className="blog-button">
              👍 Like {blog.reactions.likes}
            </button>
            <button className="blog-button">
              👎 Dislike {blog.reactions.dislikes}
            </button>
          </div>

          <p className="blog-views">Views: {blog.views}</p>
        </div>
      </div>
    </div>
  );
}
