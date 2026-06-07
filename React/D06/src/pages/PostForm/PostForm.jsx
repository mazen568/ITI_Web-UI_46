import styles from "./PostForm.module.css";
import { useState, memo, useEffect } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/slices/postsSlice";

export default memo(function PostForm() {

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { loading } = useSelector((state) => state.postsReducer);
  const dispatch= useDispatch();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

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
    const result = await dispatch(createPost(formData));
    if (createPost.fulfilled.match(result)) {
      navigate("/posts");
    }

  };

  return (
    <main className={styles["main-content"]}>
      <div className={styles["post-form-container"]}>
        <h2 className={styles["section-title"]}>{t("feed.submit_news")}</h2>

        <form className={styles["post-form"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder={t("feed.placeholder_title")}
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className={styles["form-group"]}>
            <input
              type="text"
              placeholder={t("feed.placeholder_image")}
              name="imageUrl"
              required
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className={styles["form-group"]}>
            <textarea
              placeholder={t("feed.placeholder_desc")}
              rows="4"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={styles["form-actions"]}>
            <button type="submit" className={styles["submit-btn"]} disabled={loading}>
              {loading ? t("common.publishing") : t("common.publish")}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
});
