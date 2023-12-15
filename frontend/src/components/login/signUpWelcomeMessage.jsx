import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const SignupWelcomeMessage = ({ username, onNavigate }) => {
    return (
      <div className='signup-welcome-message'>
        {/* Display a welcome message with the signed-up username */}
        <h3>Welcome {username}!</h3>
        <p> You have successfully signed up.</p>
  
        <Link to="/">
        <button className="signup-navigate-btn">
          Home
        </button>
        </Link>
      </div>
    );
  };
export default SignupWelcomeMessage;