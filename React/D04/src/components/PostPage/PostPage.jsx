import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./PostPage.module.css";

export default function PostPage({ posts, addPost }) {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [posts, searchTerm]);

  return (
    <>
      <section >
        <PostForm addPost={addPost} />
      </section>
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
    </>
  );
}
