import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-wrp d-flex justify-content-center align-items-center">
      <div className="notfound-card text-center">
        <div className="notfound-404">
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <p>The page you are looking for might have been removed. </p>
        <button onClick={() => navigate(`/`)} className="btn btn-warning">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;