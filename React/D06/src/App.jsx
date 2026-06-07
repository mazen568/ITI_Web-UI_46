import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner/Spinner";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";


const NewsSlider = lazy(() => import("./pages/NewsSlider/NewsSlider"));
const PostPage = lazy(() => import("./pages/Post/Post"));
const PostForm = lazy(() => import("./pages/PostForm/PostForm"));
const NotAuthenticated = lazy(() => import("./pages/NotAuthenticated/NotAuthenticated"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const PostDetails = lazy(() => import("./pages/PostDetails/PostDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          {
            path: "home",
            element: (
              <Suspense fallback={<Spinner message="Loading News Feed..." />}>
                <NewsSlider />
              </Suspense>
            ),
          },
          {
            path: "posts",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Spinner message="Loading Posts..." />}>
                  <PostPage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "posts/:id",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Spinner message="Loading Details..." />}>
                  <PostDetails />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "add-post",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<Spinner message="Preparing Editor..." />}>
                  <PostForm />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "not-authorized",
            element: (
              <Suspense fallback={<Spinner message="Verifying Access..." />}>
                <NotAuthenticated />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<Spinner message="Finding Page..." />}>
                <NotFound />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Spinner message="Loading Login..." />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Spinner message="Loading Signup..." />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);



export default function App() {
  const mode = useSelector((state) => state.themeReducer.mode);

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [mode]);


  return (
    <div className="app-container">
      <RouterProvider router={router} />
      <ToastContainer position="top-right" theme={mode === "dark" ? "dark" : "light"} />

    </div>
  );
}
