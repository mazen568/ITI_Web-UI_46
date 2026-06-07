import './Header.css';
import { Component } from 'react';
class Header extends Component {
  render() {    
    return (
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">Mazen<span>News</span></h1>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link active">Latest News</a>
            <a href="#" className="nav-link">Gadgets</a>
            <a href="#" className="nav-link">Software</a>
          </nav>
          <div className="user-actions">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Signup</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
