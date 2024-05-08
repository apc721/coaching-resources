import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  const titleElement = screen.getByText(/Coaching Resources/i);
  expect(titleElement).toBeInTheDocument();
});
