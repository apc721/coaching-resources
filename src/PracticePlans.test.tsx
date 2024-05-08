import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticePlans from './PracticePlans';

test('should render correctly', async () => {
  render(<PracticePlans />);
  const headingElement = screen.getAllByText(/Practice Plans/i)[0];
  expect(headingElement).toBeInTheDocument();
  const paragraphElement = screen.getByText(/This is where you will see all your practice plans./i);
  expect(paragraphElement).toBeInTheDocument();
});
