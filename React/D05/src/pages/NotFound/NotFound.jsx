import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../NotAuthenticated/NotAuthenticated.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page not-found">
      <div className="error-content">
        <div className="error-icon" style={{ color: '#f59e0b' }}>
          <FaExclamationTriangle />
        </div>
        <h1>404 - Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved. Let's get you back on track!</p>
        <div className="error-actions">
          <button onClick={() => navigate('/home')} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
