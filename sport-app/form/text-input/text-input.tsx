import React from 'react';
import { Button, ButtonProps } from '@hawkin/sport-app.shared.button';
import { Input, InputProps } from '@hawkin/sport-app.shared.input';
import style from './text-input.module.scss';

export type TextInputProps = {
  inputProps: InputProps;
  buttonProps: ButtonProps;
};

export function TextInput(props: TextInputProps) {
  return (
    <div className={style.inputDiv}>
      <Input type={props.inputProps.type} label={props.inputProps.label} />
      <Button type={props.buttonProps.type} label={props.buttonProps.label} />
    </div>
  );
}
