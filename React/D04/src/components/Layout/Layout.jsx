/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import NewsSlider from "../NewsSlider/NewsSlider";
import PostPage from "../PostPage/PostPage";
import axios from "axios";
import styles from "./Layout.module.css";

export default function Layout() {

  const [posts, setPosts] = useState([]);

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get("http://localhost:4000/news");
  //     this.setState({ posts: response.data });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/news");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, [])


  const addPost = useCallback(async (newPost) => {
    try {
      const response = await axios.post("http://localhost:4000/news", newPost);
      // this.setState({
      //   posts: [newPost, ...this.state.posts],
      // });
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <>
      <NewsSlider posts={posts} />
      <main className={styles["main-content"]}>
        <PostPage posts={posts} addPost={addPost} />
      </main>
    </>
  );
}
