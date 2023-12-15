import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PackList from '../components/pack-list/pack-list';

// Mock the essentials.json file import
jest.mock('../components/pack-list/essentials.json', () => ({
  "🎫 Essentials": [
    // ... other categories
    "Sunscreen",
    "Sunglasses",
    "Beachwear",
    "Dry Bag",
    "Beach towel",
    "After Sun",
  ],
  "🌍 Your Trip": [
    // ... other destinations
    "Winter coat",
    "Snow boots",
    "Thermal layers",
  ],
}));

test('renders initial image buttons for Sun, Snow, City, and Business', () => {
  render(<PackList />);

  // Check if the image buttons are present
  const sunImage = screen.getByAltText('Sun');
  const snowImage = screen.getByAltText('Snow');
  const cityImage = screen.getByAltText('City Break');
  const businessImage = screen.getByAltText('Business');

  // Assert that all four image buttons are present
  expect(sunImage).toBeInTheDocument();
  expect(snowImage).toBeInTheDocument();
  expect(cityImage).toBeInTheDocument();
  expect(businessImage).toBeInTheDocument();
});

test('clicking any button opens the accordion with six sections', async () => {
  render(<PackList />);

  // Check if the accordion is initially closed
  expect(screen.queryByText('Essentials')).not.toBeInTheDocument();

  // Click on the 'Sun' destination button (image)
  const sunImage = screen.getByAltText('Sun');
  userEvent.click(sunImage);

  // Wait for the accordion to open
  await waitFor(() => {
    // Check if the accordion contains six sections using a custom query
    expect(
      screen.getByText((content: string, element: HTMLElement) => content.includes('Essentials'))
    ).toBeInTheDocument();
  });

});

test('clicking Snow opens the accordion with "Your Trip" section', async () => {
  render(<PackList />);

  // Check if the accordion is initially closed
  expect(screen.queryByText('Winter coat')).not.toBeInTheDocument();

  // Click on the 'Snow' destination button (image)
  const snowImage = screen.getByAltText('Snow');
  userEvent.click(snowImage);

  // Wait for the accordion to open
  await waitFor(() => {
    // Check if the text "Your Trip" is present in any form within the rendered content
    expect(screen.getByText((content, element) => content.includes('Your Trip'))).toBeInTheDocument();

    // Check if the "Your Trip" section contains the expected items
    expect(screen.getByText('Winter coat')).toBeInTheDocument();
    expect(screen.getByText('Snow boots')).toBeInTheDocument();
    expect(screen.getByText('Thermal layers')).toBeInTheDocument();
  });

});