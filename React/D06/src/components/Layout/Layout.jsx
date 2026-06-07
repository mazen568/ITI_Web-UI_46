/* eslint-disable no-unused-vars */
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const currentLang = useSelector((state) => state.langReducer.lang);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    document.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [currentLang, i18n]);

  return (
    <>
      <Header />
      <main className="main-layout-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
