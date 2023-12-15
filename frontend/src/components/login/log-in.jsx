import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginApi } from './api';
import WelcomeMessage from './welcome-message';
import './login.css';
import { useAuth } from './authContext';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await loginApi(username, password);
      console.log('Test');
  
      if (response.success) {
        // Handle successful login
        setIsLoggedIn(true)
        login({ username });
        console.log('Login successful');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid username or password. Please try again.');
      e.preventDefault();
    }
  };
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <WelcomeMessage username={username} onLogout={handleLogout} />
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <label htmlFor="login-username">Username:</label>
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
