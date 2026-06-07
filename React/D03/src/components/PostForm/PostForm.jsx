import styles from "./PostForm.module.css";
import { useState } from "react";

export default function PostForm({ addPost }) {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    addPost(formData);
      setFormData({
        title: "",
        imageUrl: "",
        description: ""
      });
  };

  return (
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
          <button type="submit" className={styles["submit-btn"]}>
            Publish News
          </button>
        </div>
      </form>
    </div>
  );
}