import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <img 
        src="https://i.imgur.com/qIufhof.png" 
        alt="404 Not Found" 
        className="not-found-image"
      />
      <h1 className="not-found-title">Oops!</h1>
      <p className="not-found-subtitle">We can't seem to find the page you're looking for.</p>
      <p className="not-found-code">Error Code: 404</p>

      <button 
        className="home-button" 
        onClick={() => navigate('/drag-code-gen')}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
