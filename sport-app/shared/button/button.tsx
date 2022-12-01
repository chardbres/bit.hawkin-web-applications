import React from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  label: string;
};

export function Button(props: ButtonProps) {
  return <button className={styles.primary}>{props.label}</button>;
}
