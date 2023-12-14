import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUpApi } from './api';
import WelcomeMessage from '../login/welcome-message';
import '../login/login-signup.css';
import { useAuth } from './authContext'; // Update the path based on your project structure

const SignUp = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await signUpApi(username, email, password);

      if (response !== undefined && response.toLowerCase() === 'sign-up successful') {
        console.log('Sign-up successful');

        // Log user data before calling login
        console.log('User data before login:', { username, email });

        // Perform login after successful signup
        login({ username, email });

             // Log user data after calling login
      console.log('User data after login:', { username, email });

        setIsSignedUp(true);
      } else {
        console.error('Invalid or unexpected response structure');
        setError('Error during sign-up');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setError(error.message || 'Error during sign-up');
    }
  };

  // function resetForm() {
  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  //   setError('');
  // }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="signup-username">Username:</label>
        <input
          type="text"
          id="signup-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="signup-email">Email:</label>
        <input
          type="email"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="signup-password">Password:</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {isSignedUp && (
        <div className="welcome-message">
          <p className="success-message">Welcome, {username}! Your sign-up was successful.</p>
          <button className="go-home-btn" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      )}
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
