import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home/home';

// Define a simple test: Check if the Home component displays the message "Home Page."
test('renders a message', () => {

  // Use the render function to create a virtual representation of the Home component.
  render(<Home />);
  
  // Find an element that has the text "Home Page" in our virtual representation.
  const messageElement = screen.getByText("Home Page");

  // Make sure that the element with "Home Page" is present in our virtual representation.
  // This is like saying, "I expect to see the text 'Home Page' when I render the Home component."
  expect(messageElement).toBeInTheDocument();
});
