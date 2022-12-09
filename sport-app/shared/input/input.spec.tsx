import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { PrimaryInput, DarkInput } from './input.composition';

expect.extend(toHaveNoViolations);

it('should render inputs with the correct class names', () => {
  render(<PrimaryInput />);
  const primaryInput = screen.getByRole('textbox');
  expect(primaryInput).toHaveClass('primary');
  cleanup();
});

it('should have no basic accessibility issues', async () => {
  const { container } = render(<DarkInput />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});
