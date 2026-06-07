import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { getPostByIdApi } from "../../api/posts";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./PostDetails.module.css";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPostById } = useContext(PostsContext);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // Try getting from context first
        const foundPost = getPostById(id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          // Fallback to API if not in context (e.g. on refresh)
          const apiPost = await getPostByIdApi(id);
          setPost(apiPost);
        }
      } catch (err) {
        console.error("Failed to fetch post details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, getPostById]);

  if (loading) return <Spinner message="Loading article..." />;


  if (!post) {
    return (
      <div className={styles["not-found"]}>
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/home")} className="btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className={styles["details-container"]}>
      <button className={styles["back-btn"]} onClick={() => navigate("/posts")}>
        <FaArrowLeft /> Back
      </button>

      <article className={styles["post-article"]}>
        <div className={styles["article-header"]}>
          <div className={styles["meta-info"]}>
            <span className={styles["category"]}>
              <FaTag /> Tech News
            </span>
            <span className={styles["date"]}>
              <FaCalendarAlt /> {post.timestamp}
            </span>
            <span className={styles["read-time"]}>
              <FaClock /> 5 min read
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
