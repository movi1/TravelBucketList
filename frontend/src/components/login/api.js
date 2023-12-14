import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const signUpApi = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      username,
      email,
      password,
    });

    return response.data; // Assuming the response contains a 'message' property
  } catch (error) {
    throw error.response.data || 'Error during sign-up';
  }
};

const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response.data || 'Login failed';
  }
};

export { signUpApi, loginApi };




