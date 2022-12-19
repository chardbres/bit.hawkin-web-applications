import React, { ReactNode } from 'react';
import { Button } from '@hawkin/sport-app.shared.button';
import { CardSmall } from '@hawkin/sport-app.shared.card';
import { Column } from '@hawkin/sport-app.layout.column';
import { FullLogo } from '@hawkin/sport-app.shared.logos';
import { Input } from '@hawkin/sport-app.shared.input';
import style from './login.module.scss';

export type LoginProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Login({ children }: LoginProps) {
  return (
    <CardSmall>
      <Column>
        <header className={style.cardHeader}>
          <FullLogo />
        </header>
        <body className={style.cardBody}>
          <h1>Log In</h1>
          <Input type="dark" placeholder="Username..." />
          <Input type="dark" placeholder="Password..." />
        </body>
        <footer className={style.cardFooter}>
          <p>Forgot password?</p>
          <Button type="primary-small" label="LOG IN" />
        </footer>
      </Column>
    </CardSmall>
  );
}
