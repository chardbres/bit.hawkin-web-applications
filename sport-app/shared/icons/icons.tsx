import React, { ReactNode } from 'react';
import Add from '@mui/icons-material/Add';

export type IconsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export const Icon = (): React.ReactElement => {
  return (
    <div>
      <Add />
    </div>
  );
};
