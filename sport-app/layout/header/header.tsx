import React, { ReactNode } from 'react';
import { RowDark } from '@hawkin/sport-app.layout.row';
import { FullLogo } from '@hawkin/sport-app.shared.logos';
import style from './header.module.scss';

export type HeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export const Header = (): React.ReactElement => {
  return (
    <div className={style.headerDiv}>
      <RowDark>
        <div className={style.contentDiv}>
          <div className={style.logoDiv}>
            <FullLogo />
          </div>
          <div className={style.menuDiv}>
            <p>Live Testing</p>
            <p>Scoreboard</p>
            <p>Support</p>
            <p>Settings</p>
          </div>
        </div>
      </RowDark>
    </div>
  );
};
