import { useContext, useState, useEffect } from "react";
import styles from "./NewsSlider.module.css";
import { PostsContext } from "../../context/PostsContext";
import { getPostsApi } from "../../api/posts";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function NewsSlider() {
  const { posts, setPosts, loading, setLoading } = useContext(PostsContext);

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (loading) {
    return <Skeleton type="slider" />;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="loading-container">
        <p className="loading-text">No news available at the moment.</p>
      </div>
    );
  }

  const currentNews = posts[currentIndex];

  return (
    <div className={styles["news-slider"]}>
      <div className={styles["slide-content"]}>
        <img
          src={currentNews.imageUrl}
          alt={currentNews.title}
          className={styles["slider-image"]}
        />

        <div className={styles["slider-overlay"]}>
          <div className={styles["slider-text-content"]}>
            <span className={styles["featured-badge"]}>
              FEATURED STORY
            </span>

            <h2 className={styles["slider-title"]}>
              {currentNews.title}
            </h2>

            <p className={styles["slider-desc"]}>
              {currentNews.description}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["slider-controls"]}>
        <button
          className={`${styles["control-btn"]} ${styles.prev}`}
          onClick={prevSlide}
        >
          ❮
        </button>

        <button
          className={`${styles["control-btn"]} ${styles.next}`}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
}