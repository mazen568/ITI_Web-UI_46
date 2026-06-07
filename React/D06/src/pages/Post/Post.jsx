import PostList from "../../components/PostList/PostList";
import { useState, useMemo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Post.module.css";
import Skeleton from "../../components/Skeleton/Skeleton";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsSlice";

export default function PostPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const dispatch =useDispatch();
  const {loading,posts}=useSelector((state)=>state.postsReducer);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
            <h2 className={styles["news-feed-title"]}>{t("feed.latest_news")}</h2>
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
            <h2 className={styles["news-feed-title"]}>{t("feed.latest_news")}</h2>
            <div className={styles["search-container"]}>
              <FaSearch className={styles["search-icon"]} />
              <input
                type="text"
                placeholder={t("feed.search_placeholder")}
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
