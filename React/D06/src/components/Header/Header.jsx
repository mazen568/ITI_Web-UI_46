import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGlobe, FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/slices/langSlice";
import { useTranslation } from "react-i18next";
import { logout } from "../../redux/slices/authSlice";
import { toggleTheme } from "../../redux/slices/themeSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { user, isAuthenticated } = useSelector((state) => state.authReducer);
  const { mode } = useSelector((state) => state.themeReducer);

  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className={classes.header} dir="ltr">
      <div className={classes["header-content"]}>
        <div className={classes.logo}>
          <h1 className={classes["logo-text"]}>
            {t("common.tech")}<span>{t("common.news")}</span>
          </h1>
        </div>

        <nav className={classes.nav}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${classes["nav-link"]} ${isActive ? classes.active : ""}`
            }
          >
            {t("common.home")}
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `${classes["nav-link"]} ${isActive ? classes.active : ""}`
            }
          >
            {t("common.posts")}
          </NavLink>
          <NavLink
            to="/add-post"
            className={({ isActive }) =>
              `${classes["nav-link"]} ${isActive ? classes.active : ""}`
            }
          >
            {t("common.add_post")}
          </NavLink>
        </nav>

        <div className={classes["user-actions"]}>
          {isAuthenticated ? (
            <div className={classes["user-info"]}>
              <span className={classes["username"]}>{t("auth.Hi")} ,{user.name}</span>
              <button
                onClick={handleLogout}
                className={classes["btn-secondary"]}
              >
                {t("common.logout")}
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className={classes["btn-secondary"]}
              >
                {t("common.login")}
              </button>
              <button
                onClick={() => navigate("/signup")}
                className={classes["btn-primary"]}
              >
                {t("common.signup")}
              </button>
            </>
          )}
          <button
            className={classes["lang-toggle"]}
            onClick={() =>
              currentLang === "en"
                ? dispatch(changeLang("ar"))
                : dispatch(changeLang("en"))
            }
          >
            <FaGlobe className={classes["globe-icon"]} />
            <span>{currentLang === "en" ? "en" : "ع"}</span>
          </button>
          <button
            className={classes["theme-toggle"]}
            onClick={() => dispatch(toggleTheme())}
            title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {mode === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
