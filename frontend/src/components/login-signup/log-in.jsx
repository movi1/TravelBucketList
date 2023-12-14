import React, { useState } from "react";
import SignUp from "./sign-up";
import WelcomeMessage from "./welcome-message";
import "./login-signup.css";

const Login = () => {
  // Variables:
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();

    // Dummy login credentials
    const dummyPassword = "password";

    // Check if the entered password matches the dummy password
    if (password === dummyPassword) {

      // Simulate a successful login
      console.log("Dummy login successful");
      setIsLoggedIn(true);

      // Set the entered username to be displayed in WelcomeMessage
      setUsername(username);
    } else {
      // Simulate an unsuccessful login
      setError("Invalid password. Please try again.");
    }
  };

  // Handle logout
  function handleLogout() {
    setIsLoggedIn(false);
    // Additional logout logic here
  }

  // Toggle between login and sign-up modes
  function toggleMode() {
    setIsSignUpMode(!isSignUpMode);
    setError(null);
  }

  return (
    <div className="login-signup-container">
      {isLoggedIn ? (
        // Render WelcomeMessage if user is logged in
        <WelcomeMessage username={username} onLogout={handleLogout} />
      ) : (
        <>
          {/* Display either "Login" or "Sign Up" based on the mode */}
          <h2>{isSignUpMode ? "Sign Up" : "Login"}</h2>

          {isSignUpMode ? (
            // Render SignUp component if in sign-up mode
            <SignUp />
          ) : (
            // Render login form
            <form onSubmit={handleLogin}>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-signup-btn" type="submit">
                Login
              </button>
            </form>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* Display switch button for toggling between login and sign-up modes */}
          <p>
            {isSignUpMode
              ? "Already have an account? "
              : "Don't have an account? "}
            <button className="switch-btn" onClick={toggleMode}>
              {isSignUpMode ? "Switch to Login" : "Switch to Sign Up"}
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
