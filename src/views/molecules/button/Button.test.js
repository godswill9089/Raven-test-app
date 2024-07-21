import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders with correct title and handles click', () => {
  // Mock onClick function
  const handleClick = jest.fn();

  // Render the Button component
  render(
    <Button disabled={false} title='Add transaction' onClick={handleClick} />
  );

  // Check if the button displays the correct title
  expect(screen.getByText('Add transaction')).toBeInTheDocument();

  // Click the button and check if the onClick handler is called
  fireEvent.click(screen.getByText('Add transaction'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button does not call onClick when disabled', () => {
  // Mock onClick function
  const handleClick = jest.fn();

  // Render the Button component with disabled prop
  render(
    <Button disabled={true} title='Add transaction' onClick={handleClick} />
  );

  // Check if the button displays the correct title
  expect(screen.getByText('Add transaction')).toBeInTheDocument();

  // Click the button and check if the onClick handler is not called
  fireEvent.click(screen.getByText('Add transaction'));
  expect(handleClick).not.toHaveBeenCalled();
});
