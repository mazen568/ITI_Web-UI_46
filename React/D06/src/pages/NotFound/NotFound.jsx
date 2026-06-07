import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../NotAuthenticated/NotAuthenticated.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = useSelector((state) => state.langReducer.lang);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <div className="error-page not-found">
      <div className="error-content">
        <div className="error-icon" style={{ color: '#f59e0b' }}>
          <FaExclamationTriangle />
        </div>
        <h1>{t("errors.page_not_found")}</h1>
        <p>{t("errors.page_not_found_desc")}</p>
        <div className="error-actions">
          <button onClick={() => navigate('/home')} className="btn-primary">
            {t("common.back_to_home")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
