import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
