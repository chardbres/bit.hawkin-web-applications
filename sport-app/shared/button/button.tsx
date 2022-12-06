import React from 'react';
import style from './button.module.scss';

export type ButtonProps = {
  label: string;
  type: string;
};

export const Button = (props: ButtonProps) => {
  return <button className={style[props.type]}>{props.label}</button>;
};
