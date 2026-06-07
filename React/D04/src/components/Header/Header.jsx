import classes from './Header.module.css';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes["header-content"]}>
          <div className={classes.logo}>
            <h1 className={classes["logo-text"]}>
              Tech<span>News</span>
            </h1>
          </div>

          <nav className={classes.nav}>
            <a href="#" className={`${classes["nav-link"]} ${classes.active}`}>
              Latest News
            </a>
            <a href="#" className={classes["nav-link"]}>
              Gadgets
            </a>
            <a href="#" className={classes["nav-link"]}>
              Software
            </a>
          </nav>

          <div className={classes["user-actions"]}>
            <button className={classes["btn-secondary"]}>Login</button>
            <button className={classes["btn-primary"]}>Signup</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;