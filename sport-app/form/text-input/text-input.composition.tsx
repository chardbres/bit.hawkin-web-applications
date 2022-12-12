import React from 'react';
import { TextInput } from './text-input';

export const BasicTextInput = () => {
  return (
    <TextInput
      buttonProps={{ label: 'Submit', type: 'primary-small' }}
      inputProps={{ label: 'Placeholder...', type: 'primary' }}
    />
  );
};
