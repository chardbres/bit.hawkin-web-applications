import React from 'react';
import Logo from './assets/hd-logo.png';
import style from './icons.module.scss';

export type IconsProps = {
  onClick?: (e?: React.MouseEvent<HTMLImageElement>) => void;
};

export const FullLogo = (): React.ReactElement => {
  return (
    <div className={style.fullLogo}>
      <img src={Logo} />
    </div>
  );
};
