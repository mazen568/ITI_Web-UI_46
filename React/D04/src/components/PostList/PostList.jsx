import PostCard from '../PostCard/PostCard';
import styles from './PostList.module.css';

export default function PostList({posts}) {
  

    return (
      <div className={styles["post-list"]}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
}

