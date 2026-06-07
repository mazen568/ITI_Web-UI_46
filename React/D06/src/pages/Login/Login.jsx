import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Login/Auth.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { loading, isAuthenticated } = useSelector((state) => state.authReducer);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    document.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang, i18n]);

  const validate = () => {
    const newErrors = {};
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    dispatch(loginUser(formData));
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{t("auth.welcome_back")}</h1>
        <p>{t("auth.login_sub")}</p>
        <form onSubmit={handleSubmit} noValidate>
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
              placeholder={t("auth.placeholder_password")}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "..." : t("common.login")}
          </button>
        </form>
        <p className="auth-footer">
          {t("auth.dont_have_account")}{" "}
          <Link to="/signup">{t("auth.sign_up")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
