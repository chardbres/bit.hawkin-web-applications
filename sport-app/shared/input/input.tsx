import React from 'react';
import style from './input.module.scss';

export type InputProps = {
  placeholder: string;
  type: 'primary' | 'secondary' | 'dark' | 'dark-outline';
};

export function Input(props: InputProps) {
  return (
    <input className={style[props.type]} placeholder={props.placeholder} />
  );
}
