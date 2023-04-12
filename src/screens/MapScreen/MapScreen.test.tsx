import React from 'react';
import { render, screen } from '@testing-library/react';
import MapScreen from './MapScreen';

test('renders learn react link', () => {
  render(<MapScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
