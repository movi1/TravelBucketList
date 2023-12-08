// This is a mock API Function

// Simulate a function that sends a POST request to a server
async function signUpApi(username, email, password) {
    // Simulate server-side validation and user creation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For simplicity, consider the sign-up successful if the email and password are not empty
        if (email && password) {
          resolve({ message: 'Sign-up successful' });
        } else {
          reject({ message: 'Please provide a valid email and password.' });
        }
      }, 1000); // Simulate a delay for an API call
    });
  }
  
  export default signUpApi;