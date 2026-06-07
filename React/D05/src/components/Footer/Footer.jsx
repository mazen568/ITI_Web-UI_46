import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <p>&copy; 2026 mazen</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
