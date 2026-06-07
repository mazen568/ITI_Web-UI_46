import { Component } from 'react';
import PostCard from '../PostCard/PostCard';
import './PostList.css';

class PostList extends Component {

  render() {
    const {posts} = this.props;
    return (
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
