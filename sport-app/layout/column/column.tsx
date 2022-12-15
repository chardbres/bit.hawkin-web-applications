import React, { ReactNode } from 'react';
import style from './column.module.scss';

export type ColumnProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Column({ children }: ColumnProps): React.ReactElement {
  return <div className={style.column}>{children}</div>;
}
