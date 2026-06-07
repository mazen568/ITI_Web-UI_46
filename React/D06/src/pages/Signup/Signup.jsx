import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login/Auth.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { loading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    i18n.changeLanguage(currentLang);
    document.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang, i18n]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Username must be at least 3 characters";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const result = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{t("auth.join_technews")}</h1>
        <p>{t("auth.signup_sub")}</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>{t("auth.username")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "invalid" : ""}
              placeholder={t("auth.placeholder_name")}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>{t("auth.email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "invalid" : ""}
              placeholder={t("auth.placeholder_email")}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>{t("auth.password")}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "invalid" : ""}
              placeholder={t("auth.placeholder_create_password")}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "..." : t("common.signup")}
          </button>
        </form>
        <p className="auth-footer">
          {t("auth.already_have_account")}{" "}
          <Link to="/login">{t("common.login")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
