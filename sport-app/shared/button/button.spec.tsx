import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './button';

expect.extend(toHaveNoViolations);

it('should render a button with the class of primary', () => {
  render(<Button type="primary" label="Primary" />);
  const primaryButton = screen.getByRole('button', { name: /primary/i });
  expect(primaryButton).toHaveClass('primary');
});

it('should have no basic accessibility issues', async () => {
  const { container } = render(<Button type="primary" label="Primary" />);
  expect(await axe(container)).toHaveNoViolations();
});
