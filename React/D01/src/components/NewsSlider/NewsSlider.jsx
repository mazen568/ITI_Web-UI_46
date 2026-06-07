import { Component } from 'react';
import './NewsSlider.css';
// import axios from 'axios'; 

class NewsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0 
    };
  }


  nextSlide = () => {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.props.posts.length
    });
  };

  prevSlide = () => {
    this.setState({
      currentIndex:
        (this.state.currentIndex - 1 + this.props.posts.length) %
        this.state.news.length
    });
  };

  render() {
    const {currentIndex } = this.state;
    const {posts}= this.props;

    if (posts.length === 0) {
      return <div >Loading</div>;
    } 

    const currentNews = posts[currentIndex];

    return (
      <div className="news-slider">
        <div className="slide-content">
          <img src={currentNews.imageUrl} alt={currentNews.title} className="slider-image" />
          <div className="slider-overlay">
            <div className="slider-text-content">
              <span className="featured-badge">FEATURED STORY</span>
              <h2 className="slider-title">{currentNews.title}</h2>
              <p className="slider-desc">{currentNews.description}</p>
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button className="control-btn prev" onClick={this.prevSlide}>❮</button>
          <button className="control-btn next" onClick={this.nextSlide}>❯</button>
        </div>
      </div>
    );
  }
}

export default NewsSlider;
