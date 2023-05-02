// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

test('renders Navbar component', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Mon application/i);
  expect(headerElement).toBeInTheDocument();
});