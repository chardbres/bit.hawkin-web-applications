import React from 'react';
import Logo from './assets/hd-logo.png';
import style from './logos.module.scss';

export type LogoProps = {
  onClick?: (e?: React.MouseEvent<HTMLImageElement>) => void;
};

export const FullLogo = (): React.ReactElement => {
  return (
    <div className={style.logoDiv}>
      <img className={style.logo} src={Logo} alt="Hawkin Dynamics Logo" />
    </div>
  );
};
