import React from 'react';
import style from './icons.module.scss';
import 'material-symbols';

export type IconProps = {
  name: string;
  type: 'primary' | 'secondary' | 'accent' | 'dark' | 'light' | 'white';
};

export const Icon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">{props.name}</span>
    </div>
  );
};
