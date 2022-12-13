import React, { ReactNode } from 'react';
import style from './card.module.scss';

export type CardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Card({ children }: CardProps): React.ReactElement {
  return <div className={style.small}>{children}</div>;
}
