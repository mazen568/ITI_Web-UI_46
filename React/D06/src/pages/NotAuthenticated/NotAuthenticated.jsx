import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotAuthenticated.css';
import { FaLock } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const NotAuthenticated = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <div className="error-page auth-error">
      <div className="error-content">
        <div className="error-icon">
          <FaLock />
        </div>
        <h1>{t("errors.access_denied")}</h1>
        <p>{t("errors.access_denied_desc")}</p>
        <div className="error-actions">
          <button onClick={() => navigate('/login')} className="btn-primary">
            {t("common.login_now")}
          </button>
          <button onClick={() => navigate('/home')} className="btn-secondary">
            {t("common.go_to_home")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthenticated;
