// HelloWorld.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld/HelloWorld';

test('renders a message', () => {
  render(<HelloWorld message="Hello, World!" />);
  const messageElement = screen.getByText(/Hello, World!/i);
  expect(messageElement).toBeInTheDocument();
});
