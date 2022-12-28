import React from 'react';
import { render } from '@testing-library/react';
import { BasicIcons } from './icons.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicIcons />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
