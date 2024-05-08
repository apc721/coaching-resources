import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('should render correctly', async () => {
  render(<HomePage />);
  const headingElement = screen.getByText(/home page/i);
  expect(headingElement).toBeInTheDocument();
  const paragraphElement = screen.getByText(/This is where your main content will be displayed./i);
  expect(paragraphElement).toBeInTheDocument();
});
