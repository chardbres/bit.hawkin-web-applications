import React from 'react';
import style from './icons.module.scss';
import 'material-symbols';

export type IconProps = {
  type: 'primary' | 'secondary' | 'accent' | 'dark' | 'light';
};

export const PlusIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">add</span>
    </div>
  );
};
