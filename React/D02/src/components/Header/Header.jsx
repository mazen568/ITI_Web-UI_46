import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text">Mazen<span>Feed</span></h1>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Popular</a>
          <a href="#" className="nav-link">Topics</a>
        </nav>
        <div className="user-actions">
          <button className="btn-secondary">Log In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
