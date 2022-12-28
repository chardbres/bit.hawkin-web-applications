import React from 'react';
import style from './icons.module.scss';
import 'material-symbols';

export type IconProps = {
  type: 'primary' | 'secondary' | 'accent' | 'dark' | 'light' | 'white';
};

export const PlusIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">add</span>
    </div>
  );
};

export const CheckIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">check</span>
    </div>
  );
};

export const SettingsIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">settings</span>
    </div>
  );
};

export const MenuIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">menu</span>
    </div>
  );
};

export const EditIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">edit</span>
    </div>
  );
};

export const CloseIcon = (props: IconProps) => {
  return (
    <div className={style[props.type]}>
      <span className="material-symbols-outlined">close</span>
    </div>
  );
};
