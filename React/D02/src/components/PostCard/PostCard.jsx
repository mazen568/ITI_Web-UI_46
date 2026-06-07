import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <div className="post-main">
        <div className="post-header">
          <span className="post-author">u/{post.author}</span>
          <span className="post-divider"> • </span>
          <span className="post-time">{post.timestamp}</span>
        </div>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-content">{post.content}</p>
        <div className="post-footer">
          <div className="post-action">
            <span className="icon">💬</span>
            <span>24 Comments</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
