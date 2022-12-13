import React from 'react';
import { render } from '@testing-library/react';
import { BasicColumn } from './column.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicColumn />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
