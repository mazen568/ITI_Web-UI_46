import PostCard from '../PostCard/PostCard';
import './PostList.css';
import { useState } from 'react';

const PostList = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      content: "this is post 1",
      author: "mazen",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: "Post 2",
      content: "this is post 2",
      author: "raafat",
      timestamp: new Date().toLocaleString(),

    }
  ]);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
