import React from 'react';
import { Input } from './input';

export const PrimaryInput = () => {
  return <Input label="Primary" type="primary" />;
};

export const SecondaryInput = () => {
  return <Input label="Secondary" type="secondary" />;
};

export const DarkInput = () => {
  return <Input label="Accent" type="dark" />;
};
