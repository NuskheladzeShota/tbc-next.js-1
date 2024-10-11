import Link from 'next/link';
import './blog.css';
export default function Blog({ blog }) {
  return (
    <div className="blog-item">
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>

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
        <Link href={`/blog/${blog.id}`} className="moreCardBtn">
          more details
        </Link>
      </div>
    </div>
  );
}
