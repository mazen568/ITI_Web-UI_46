import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./PostDetails.module.css";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostById } from "../../redux/slices/postsSlice";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentPost: post, detailLoading: loading } = useSelector((state) => state.postsReducer);
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id, dispatch]);

  if (loading) return <Spinner message={t("common.loading")} />;


  if (!post) {
    return (
      <div className={styles["not-found"]}>
        <h2>{t("errors.article_not_found")}</h2>
        <p>{t("errors.article_not_found_desc")}</p>
        <button onClick={() => navigate("/home")} className="btn-primary">
          {t("common.back_to_home")}
        </button>
      </div>
    );
  }

  return (
    <div className={styles["details-container"]}>
      <button className={styles["back-btn"]} onClick={() => navigate("/posts")}>
        <FaArrowLeft /> {t("common.back")}
      </button>

      <article className={styles["post-article"]}>
        <div className={styles["article-header"]}>
          <div className={styles["meta-info"]}>
            <span className={styles["category"]}>
              <FaTag /> {t("feed.tech_news")}
            </span>
            <span className={styles["date"]}>
              <FaCalendarAlt /> {post.timestamp}
            </span>
            <span className={styles["read-time"]}>
              <FaClock /> {t("feed.read_time")}
            </span>
          </div>
          <h1 className={styles["article-title"]}>{post.title}</h1>
        </div>

        <div className={styles["image-wrapper"]}>
          <img src={post.imageUrl} alt={post.title} className={styles["main-image"]} />
        </div>

        <div className={styles["article-body"]}>
          <p className={styles["lead-text"]}>{post.description}</p>
          <div className={styles["content-placeholder"]}>
            <p>
              {post.description}
            </p>
            <p>
              {post.description}
            </p>
            <p>
              {post.description}
            </p>
            <p>
              {post.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetails;
