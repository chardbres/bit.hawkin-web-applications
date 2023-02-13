import React, { ReactNode } from 'react';
import { RowDark } from '@hawkin/sport-app.layout.row';
import { FullLogo } from '@hawkin/sport-app.shared.logos';
import { Icon } from '@hawkin/sport-app.shared.icons';
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
            <Icon name="timeline" type="white" />
            <p>Live Testing</p>
            <Icon name="insert_chart" type="white" />
            <p>Scoreboard</p>
            <Icon name="help_center" type="white" />
            <p>Support</p>
            <Icon name="settings" type="white" />
            <p>Settings</p>
          </div>
        </div>
      </RowDark>
    </div>
  );
};
