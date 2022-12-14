import React from 'react';
import { Button } from '@hawkin/sport-app.shared.button';
import { Input } from '@hawkin/sport-app.shared.input';
import style from './text-input.module.scss';

export type TextInputProps = {
  placeholder: string;
  buttonLabel: string;
};

export function PrimaryTextInput(props: TextInputProps) {
  return (
    <div className={style.inputDiv}>
      <Input type="primary" placeholder={props.placeholder} />
      <Button type="primary-small" label={props.buttonLabel} />
    </div>
  );
}

export function SecondaryTextInput(props: TextInputProps) {
  return (
    <div className={style.inputDiv}>
      <Input type="secondary" placeholder={props.placeholder} />
      <Button type="secondary-small" label={props.buttonLabel} />
    </div>
  );
}

export function DarkTextInput(props: TextInputProps) {
  return (
    <div className={style.inputDiv}>
      <Input type="dark" placeholder={props.placeholder} />
      <Button type="dark-small" label={props.buttonLabel} />
    </div>
  );
}

export function DarkOutlineTextInput(props: TextInputProps) {
  return (
    <div className={style.inputDiv}>
      <Input type="dark-outline" placeholder={props.placeholder} />
      <Button type="dark-small" label={props.buttonLabel} />
    </div>
  );
}
