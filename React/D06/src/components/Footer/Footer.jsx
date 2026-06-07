import styles from './Footer.module.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p>{t("common.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
