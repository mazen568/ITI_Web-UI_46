/* eslint-disable no-unused-vars */
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
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
