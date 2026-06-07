/* eslint-disable no-unused-vars */
import styles from "./PostForm.module.css";
import { useState, memo } from "react";
import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { addPostApi } from "../../api/posts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default memo(function PostForm() {
  const { setPosts } = useContext(PostsContext);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const newPost = await addPostApi(formData);
      setPosts((prev) => [newPost, ...prev]);
      toast.success("Post created successfully!");
      navigate("/posts");
    } catch (err) {
      toast.error("Failed to create post. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles["main-content"]}>
      <div className={styles["post-form-container"]}>
        <h2 className={styles["section-title"]}>Submit Tech News</h2>

        <form className={styles["post-form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder="News Title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder="Image URL"
              name="imageUrl"
              required
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className={styles["form-group"]}>
            <textarea
              placeholder="News Description"
              rows="4"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles["form-actions"]}>
            <button type="submit" className={styles["submit-btn"]} disabled={submitting}>
              {submitting ? "Publishing..." : "Publish News"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
});
