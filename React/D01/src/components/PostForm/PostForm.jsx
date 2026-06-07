import './PostForm.css';
import { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <div className="post-form-container">
        <h2 className="section-title">Submit Tech News</h2>
        <form className="post-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="News Title"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="News Description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="button" className="submit-btn">
              Publish News
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
