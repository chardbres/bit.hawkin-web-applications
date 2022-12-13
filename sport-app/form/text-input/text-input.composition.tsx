import React from 'react';
import {
  PrimaryTextInput,
  SecondaryTextInput,
  DarkTextInput,
  DarkOutlineTextInput,
} from './text-input';

export const PrimaryThemeTextInput = () => {
  return (
    <PrimaryTextInput
      placeholder="Primary text input..."
      buttonLabel="SUBMIT"
    />
  );
};

export const SecondaryThemeTextInput = () => {
  return (
    <SecondaryTextInput
      placeholder="Secondary text input..."
      buttonLabel="SUBMIT"
    />
  );
};

export const DarkThemeTextInput = () => {
  return (
    <DarkTextInput placeholder="Dark text input..." buttonLabel="SUBMIT" />
  );
};

export const DarkOutlineThemeTextInput = () => {
  return (
    <DarkOutlineTextInput
      placeholder="Dark outline text input..."
      buttonLabel="SUBMIT"
    />
  );
};
