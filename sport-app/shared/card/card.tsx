import React, { ReactNode } from 'react';
import style from './card.module.scss';

export type CardProps = {
  children?: ReactNode;
};

export const CardSmall = ({ children }: CardProps): React.ReactElement => {
  return <div className={style.small}>{children}</div>;
};

export const CardMedium = ({ children }: CardProps): React.ReactElement => {
  return <div className={style.medium}>{children}</div>;
};

export const CardLarge = ({ children }: CardProps): React.ReactElement => {
  return <div className={style.large}>{children}</div>;
};
