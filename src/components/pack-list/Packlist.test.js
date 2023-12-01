import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PackList from './pack-list';

// Mock the essentials.json file import
jest.mock('./essentials.json', () => ({
  "🎫 Essentials": [
    "Passport",
    "Boarding pass",
    "Any VISAs/ESTAs you might need",
    "Travel insurance documents",
    "Wallet, credit & debit cards, foreign currency"
  ],
  "🧳 Clothes": [
    "Painkillers",
    "Pack of tissues",
    "Wet wipes"
  ],
  "🛫 Carry-On": [
    "Earplugs",
    "Eye mask",
    "Neck pillow"
  ],
  "🔌 Misc": [
    "Phone",
    "Phone charger",
    "Travel plug adapter",
    "Portable charger/power bank",
    "Headphones",
    "iPad/tablet/Kindle"
  ],
  "💄 Make-Up": [
    "Lipstick",
    "Eyeshadow"
  ],
  "🌍 Your Trip": [
    "Logic goes here - be brave"
  ]
}));

test('renders PackList component with essentials data', () => {
  render(<PackList />);

  // Check if the categories are rendered
  expect(screen.getByText('🎫 Essentials')).toBeInTheDocument();
  expect(screen.getByText('🧳 Clothes')).toBeInTheDocument();
  expect(screen.getByText('🛫 Carry-On')).toBeInTheDocument();
  expect(screen.getByText('🔌 Misc')).toBeInTheDocument();
  expect(screen.getByText('💄 Make-Up')).toBeInTheDocument();
  expect(screen.getByText('🌍 Your Trip')).toBeInTheDocument();

  // Check if the items are rendered
  expect(screen.getByText('Passport')).toBeInTheDocument();
  expect(screen.getByText('Boarding pass')).toBeInTheDocument();
  expect(screen.getByText('Any VISAs/ESTAs you might need')).toBeInTheDocument();
  expect(screen.getByText('Travel insurance documents')).toBeInTheDocument();
  expect(screen.getByText('Wallet, credit & debit cards, foreign currency')).toBeInTheDocument();
  expect(screen.getByText('Painkillers')).toBeInTheDocument();
  expect(screen.getByText('Pack of tissues')).toBeInTheDocument();
  expect(screen.getByText('Wet wipes')).toBeInTheDocument();
  expect(screen.getByText('Earplugs')).toBeInTheDocument();
  expect(screen.getByText('Eye mask')).toBeInTheDocument();
  expect(screen.getByText('Neck pillow')).toBeInTheDocument();
  expect(screen.getByText('Phone')).toBeInTheDocument();
  expect(screen.getByText('Phone charger')).toBeInTheDocument();
  expect(screen.getByText('Travel plug adapter')).toBeInTheDocument();
  expect(screen.getByText('Portable charger/power bank')).toBeInTheDocument();
  expect(screen.getByText('Headphones')).toBeInTheDocument();
  expect(screen.getByText('iPad/tablet/Kindle')).toBeInTheDocument();
  expect(screen.getByText('Lipstick')).toBeInTheDocument();
  expect(screen.getByText('Eyeshadow')).toBeInTheDocument();
  expect(screen.getByText('Logic goes here - be brave')).toBeInTheDocument();
});

test('accordion stays open when selected but can be manually closed', () => {
  render(<PackList />);

  // Check if the accordion is initially closed
  expect(screen.queryByText('Painkillers')).not.toBeInTheDocument();

  // Click on the 'Clothes' accordion to open it
  fireEvent.click(screen.getByText('🧳 Clothes'));

  // Check if the accordion is now open
  expect(screen.getByText('Painkillers')).toBeInTheDocument();

  // Click on the 'Clothes' accordion again to close it manually
  fireEvent.click(screen.getByText('🧳 Clothes'));

  // Using waitFor to wait for the DOM to update after the click
  waitFor(() => {
    // Check if the accordion is closed again
    expect(screen.queryByText('Painkillers')).not.toBeInTheDocument();
  });
});
