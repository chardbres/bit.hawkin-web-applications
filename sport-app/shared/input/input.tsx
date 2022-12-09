import React from 'react';
import style from './input.module.scss';

export type InputProps = {
  label: string;
  type: 'primary' | 'secondary' | 'dark';
};

export function Input(props: InputProps) {
  return <input className={style[props.type]} placeholder={props.label} />;
}
