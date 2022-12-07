import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

it('should render a button with the class of primary', () => {
  render(<Button type={'primary'} label={'Primary'} />);
  const primaryButton = screen.getByRole('button', { name: /primary/i });
  expect(primaryButton).toHaveClass('primary');
});
