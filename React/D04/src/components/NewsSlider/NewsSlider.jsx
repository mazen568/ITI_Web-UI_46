import { Component } from 'react';
import styles from './NewsSlider.module.css';

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
        this.props.posts.length
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
      <div className={styles["news-slider"]}>
        <div className={styles["slide-content"]}>
          <img src={currentNews.imageUrl} alt={currentNews.title} className={styles["slider-image"]} />
          <div className={styles["slider-overlay"]}>
            <div className={styles["slider-text-content"]}>
              <span className={styles["featured-badge"]}>FEATURED STORY</span>
              <h2 className={styles["slider-title"]}>{currentNews.title}</h2>
              <p className={styles["slider-desc"]}>{currentNews.description}</p>
            </div>
          </div>
        </div>
        <div className={styles["slider-controls"]}>
          <button className={`${styles["control-btn"]} ${styles.prev}`} onClick={this.prevSlide}>❮</button>
          <button className={`${styles["control-btn"]} ${styles.next}`} onClick={this.nextSlide}>❯</button>
        </div>
      </div>
    );
  }
}

export default NewsSlider;
