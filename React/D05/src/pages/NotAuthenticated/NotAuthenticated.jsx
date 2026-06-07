import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotAuthenticated.css';
import { FaLock } from 'react-icons/fa';

const NotAuthenticated = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page auth-error">
      <div className="error-content">
        <div className="error-icon">
          <FaLock />
        </div>
        <h1>Access Denied</h1>
        <p>You need to be logged in to access this page. Join our community to explore all features!</p>
        <div className="error-actions">
          <button onClick={() => navigate('/login')} className="btn-primary">
            Login Now
          </button>
          <button onClick={() => navigate('/home')} className="btn-secondary">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthenticated;
