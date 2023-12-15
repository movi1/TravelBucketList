import React, { useState } from 'react';
import './login-signup.css';
import signUpApi from './api'; // Import the mock API function

const SignUp = () => {
  // Variables for form inputs and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle the sign-up logic when the form is submitted
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Call the sign-up API function
      const response = await signUpApi(username, email, password);
      console.log(response.message);

      // Reset the form after successful sign-up
      resetForm();
    } catch (error) {
      // Handle sign-up errors
      console.error(error.message);
      setError(error.message);
    }
  };

  // Reset the form fields and error state
  function resetForm() {
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        
        {/* Username input field */}
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Email input field */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password input field */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Sign-up button */}
        <button className="login-signup-btn" type="submit">
          Sign Up
        </button>
      </form>

      {/* Display error message if there is an error */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
