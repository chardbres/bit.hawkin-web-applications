import React from 'react';
import { Button } from './button';

export const PrimaryButtons = () => {
  return (
    <React.Fragment>
      <Button type="primary-small" label="Small Primary" />
      <Button type="primary" label="Primary" />
      <Button type="primary-large" label="Large Primary" />
    </React.Fragment>
  );
};

export const SecondaryButtons = () => {
  return (
    <React.Fragment>
      <Button type="secondary-small" label="Small Secondary" />
      <Button type="secondary" label="Secondary" />
      <Button type="secondary-large" label="Large Secondary" />
    </React.Fragment>
  );
};

export const AccentButton = () => {
  return (
    <React.Fragment>
      <Button type="accent-small" label="Small Accent" />
      <Button type="accent" label="Accent" />
      <Button type="accent-large" label="Large Accent" />
    </React.Fragment>
  );
};

export const DarkButtons = () => {
  return (
    <React.Fragment>
      <Button type="dark-small" label="Small Dark" />
      <Button type="dark" label="Dark" />
      <Button type="dark-large" label="Large Dark" />
    </React.Fragment>
  );
};
