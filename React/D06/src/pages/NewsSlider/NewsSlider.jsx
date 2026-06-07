import { useState, useEffect } from "react";
import styles from "./NewsSlider.module.css";
import Skeleton from "../../components/Skeleton/Skeleton";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsSlice";

export default function NewsSlider() {
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { loading, posts } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
        <p className="loading-text">{t("feed.no_news")}</p>
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
              {t("common.featured_story")}
            </span>

            <h2 className={styles["slider-title"]}>{currentNews.title}</h2>

            <p className={styles["slider-desc"]}>{currentNews.description}</p>
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
