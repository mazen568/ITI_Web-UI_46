import { useState } from "react";
import styles from "./PostCard.module.css";
import ReactionButton from "../ReactionButton/ReactionButtons";

export default function PostCard({ post }) {
  const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0,
  });

  const handleLike = () => {
    setReactions({
      ...reactions,
      likes: reactions.likes + 1,
    });
  };

  const handleDislike = () => {
    setReactions({
      ...reactions,
      dislikes: reactions.dislikes + 1,
    });
  };

  return (
    <article className={styles["post-card"]}>
      <div className={styles["post-image-container"]}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className={styles["post-image"]}
        />
        <span className={styles["news-badge"]}>Tech</span>
      </div>

      <div className={styles["post-main"]}>
        <div className={styles["post-header"]}>
          <span className={styles["post-time"]}>{post.timestamp}</span>
        </div>

        <h3 className={styles["post-title"]}>{post.title}</h3>

        <p className={styles["post-content"]}>{post.description}</p>

        <div className={styles["post-footer"]}>
          <div className={styles["post-action"]}>
            <ReactionButton
              type="like"
              count={reactions.likes}
              handleReaction={handleLike}
            />

            <ReactionButton
              type="dislike"
              count={reactions.dislikes}
              handleReaction={handleDislike}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
