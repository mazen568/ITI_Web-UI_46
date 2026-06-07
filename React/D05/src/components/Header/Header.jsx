import classes from './Header.module.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-content"]}>
        <div className={classes.logo}>
          <h1 className={classes["logo-text"]}>
            Tech<span>News</span>
          </h1>
        </div>

        <nav className={classes.nav}>
          <NavLink to="/home" className={({ isActive }) => `${classes["nav-link"]} ${isActive ? classes.active : ""}`}>
            Home
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => `${classes["nav-link"]} ${isActive ? classes.active : ""}`}>
            Posts
          </NavLink>
          <NavLink to="/add-post" className={({ isActive }) => `${classes["nav-link"]} ${isActive ? classes.active : ""}`}>
            Add Post
          </NavLink>
        </nav>

        <div className={classes["user-actions"]}>
          {isAuthenticated ? (
            <div className={classes["user-info"]}>
              <span className={classes["username"]}>Hi, {user.name}</span>
              <button onClick={handleLogout} className={classes["btn-secondary"]}>Logout</button>
            </div>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className={classes["btn-secondary"]}>Login</button>
              <button onClick={() => navigate("/signup")} className={classes["btn-primary"]}>Signup</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;