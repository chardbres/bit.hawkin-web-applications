import React from 'react';
import { render } from '@testing-library/react';
import { FullHawkinLogo } from './logos.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<FullHawkinLogo />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
