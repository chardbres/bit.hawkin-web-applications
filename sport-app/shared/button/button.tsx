import React from 'react';
import style from './button.module.scss';

export type ButtonProps = {
  label: string;
  type:
    | 'primary'
    | 'primary-small'
    | 'primary-large'
    | 'secondary'
    | 'secondary-small'
    | 'secondary-large'
    | 'accent'
    | 'accent-small'
    | 'accent-large'
    | 'dark'
    | 'dark-small'
    | 'dark-large';
};

export const Button = (props: ButtonProps) => {
  const capLabel = props.label.toUpperCase();
  return <button className={style[props.type]}>{capLabel}</button>;
};
