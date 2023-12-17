import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUpApi } from './api';
import SignUpWelcomeMessage from './signUpWelcomeMessage';
import './signup.css';
import { useAuth } from './authContext';

// SignUp component
const SignUp = () => {
  // Get the login function from AuthContext
  const { login } = useAuth();

  // State variables for username, email, password, error, and signup status
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  // UseNavigate hook for navigation
  const navigate = useNavigate();

  // Event handler for form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Call the signUpApi function with user input
      const response = await signUpApi(username, email, password);

      // Check if the response is valid and sign-up was successful
      if (response && response.toLowerCase() === 'sign-up successful') {
        console.log('Sign-up successful');

        // Log user data before calling login
        console.log('User data before login:', { username, email });

        // Perform login after successful signup
        login({ username, email });

        // Log user data after calling login
        console.log('User data after login:', { username, email });

        // Update state to indicate successful sign-up
        setIsSignedUp(true);
      } else {
        console.error('Invalid or unexpected response structure');
        setError('Error during sign-up');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setError(error || 'Error during sign-up');
    }
  };

  // Function to reset form fields and error state
  // function resetForm() {
  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  //   setError('');
  // }

  return (
    <div className="signup-container">
      {isSignedUp ? (
        <SignUpWelcomeMessage username={username} onNavigate={() => navigate('/another-page')} />
      ) : (
        <>
          <form onSubmit={handleSignUp} className="signup-form">
            <h2>Sign Up</h2>
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
            <button type="submit" onClick={handleSignUp} className="signup-btn">
              Sign Up
            </button>

            {error && <p className="error-message">{error}</p>}
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </>
      )}
    </div>
  )
};

export default SignUp;
