import { Component } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";

export default class PostPage extends Component {

  render() {
    return (
      <>
        <section >
          <PostForm addPost={this.props.addPost} />
        </section>
        <section>
          <h2 className="news-feed-title">Latest News</h2>
          <PostList posts={this.props.posts} />
        </section>
      </>
    );
  }
}