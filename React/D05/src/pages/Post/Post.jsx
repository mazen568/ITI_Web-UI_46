import PostList from "../../components/PostList/PostList";
import { useState, useMemo, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Post.module.css";
import { PostsContext } from "../../context/PostsContext";
import { getPostsApi } from "../../api/posts";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function PostPage() {
  const { posts, setPosts, loading, setLoading } = useContext(PostsContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      if (posts.length > 0) return;
      try {
        setLoading(true);
        const data = await getPostsApi();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [posts.length, setPosts, setLoading]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  if (loading) {
    return (
      <main className={styles["main-content"]}>
        <section className={styles["news-feed-section"]}>
          <div className={styles["news-feed-header"]}>
            <h2 className={styles["news-feed-title"]}>Latest News</h2>
          </div>
          <div className={styles["skeleton-grid"]}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} type="post-card" />
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className={styles["main-content"]}>
        <section className={styles["news-feed-section"]}>
          <div className={styles["news-feed-header"]}>
            <h2 className={styles["news-feed-title"]}>Latest News</h2>
            <div className={styles["search-container"]}>
              <FaSearch className={styles["search-icon"]} />
              <input
                type="text"
                placeholder="Search news..."
                className={styles["search-input"]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <PostList posts={filteredPosts} />
        </section>
      </main>
    </>
  );
}
