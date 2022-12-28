import React from 'react';
import { PlusIcon } from './icons';

export const PlusIcons = () => {
  return (
    <React.Fragment>
      <PlusIcon type="secondary" />
      <PlusIcon type="primary" />
      <PlusIcon type="accent" />
      <PlusIcon type="dark" />
      <div style={{ background: 'black' }}>
        <PlusIcon type="light" />
      </div>
    </React.Fragment>
  );
};
