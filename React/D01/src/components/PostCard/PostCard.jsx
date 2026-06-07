import './PostCard.css';
import { Component } from 'react';

class PostCard extends Component {
  render() {
    const { post } = this.props;
    return (
      <article className="post-card">
        <div className="post-image-container">
          <img src={post.imageUrl} alt={post.title} className="post-image" />
          <span className="news-badge">Tech</span>
        </div>
        <div className="post-main">
          <div className="post-header">
            <span className="post-time">{post.timestamp}</span>
          </div>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-content">{post.description}</p>
          <div className="post-footer">
            <div className="post-action">
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PostCard;
