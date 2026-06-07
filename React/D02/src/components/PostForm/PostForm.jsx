import './PostForm.css';

const PostForm = () => {


  return (
    <div className="post-form-container">
      <h2 className="section-title">Create a Post</h2>
      <form className="post-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="What's on your mind?"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn" >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
