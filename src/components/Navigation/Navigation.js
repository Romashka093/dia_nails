import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Burger } from './Burger/Burger';
import Menu from './Menu/Menu';
import css from './Navigation.module.css';

export function Navigation() {
  const mobile = useMediaPredicate('(max-width: 425px)');
  const notMobile = useMediaPredicate('(min-width: 768px)');
  return (
    <header className={css.header}>
      <h1 className={css.logo}>Dia Nails</h1>
      <nav>
        {mobile && <Burger />}
        {notMobile && <Menu />}
      </nav>
    </header>
  );
}
