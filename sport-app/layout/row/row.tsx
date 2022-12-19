import React, { ReactNode } from 'react';
import style from './row.module.scss';

export type RowProps = {
  children?: ReactNode;
};

export const Row = ({ children }: RowProps): React.ReactElement => {
  return <div className={style.row}>{children}</div>;
};

export const RowDark = ({ children }: RowProps): React.ReactElement => {
  return <div className={style.rowDark}>{children}</div>;
};
