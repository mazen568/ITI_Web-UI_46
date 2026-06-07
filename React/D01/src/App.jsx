import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import Footer from "./components/Footer/Footer";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor(){
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/news")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="app-container">
        <Header />
        <NewsSlider posts={this.state.posts}/>
        <main className="main-content">
          <section className="form-section">
            <PostForm />
          </section>

          <section className="list-section">
            <h2 className="news-feed-title">Latest News</h2>
            <PostList posts={this.state.posts}/>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
