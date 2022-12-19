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
  return <RowDark>Hello!</RowDark>;
};
