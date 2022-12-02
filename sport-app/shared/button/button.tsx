import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  label: string;
};

export const Button = (props: ButtonProps) => {
  return <button className={styles.primary}>{props.label}</button>;
};

export const ButtonSec = (props: ButtonProps) => {
  return <button className={styles.secondary}>{props.label}</button>;
};
