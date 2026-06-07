import { Component } from "react";
import NewsSlider from "../NewsSlider/NewsSlider";
import PostPage from "../PostPage/PostPage";
import axios from "axios";
import styles from "./Layout.module.css";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:4000/news");
      this.setState({ posts: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  addPost = async (newPost) => {
    try {
      const response = await axios.post("http://localhost:4000/news", newPost);
      this.setState({
        posts: [response.data, ...this.state.posts],
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <NewsSlider posts={this.state.posts} />
        <main className={styles["main-content"]}>
          <PostPage posts={this.state.posts} addPost={this.addPost} />
        </main>
      </>
    );
  }
}
