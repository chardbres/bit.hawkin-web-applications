import React from 'react';
import { Input } from './input';

export const PrimaryInput = () => {
  return <Input placeholder="Primary" type="primary" />;
};

export const SecondaryInput = () => {
  return <Input placeholder="Secondary" type="secondary" />;
};

export const DarkInput = () => {
  return <Input placeholder="Accent" type="dark" />;
};

export const DarkOutlineInput = () => {
  return <Input placeholder="Dark outline" type="dark-outline" />;
};
