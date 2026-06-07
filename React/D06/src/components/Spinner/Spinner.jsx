
const Spinner = ({ message = "Loading content...", minHeight = "300px" }) => {
  return (
    <div className="loading-container" style={{ minHeight }}>
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default Spinner;
