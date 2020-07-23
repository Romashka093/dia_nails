import React from 'react';
import css from './Navigation.module.css';
import { Burger } from './Burger/Burger';

export const Navigation = () => {
  return (
    <header className={css.header}>
      <h1 className={css.logo}>Студія МАК</h1>
      <nav>
        <Burger />
      </nav>
    </header>
  );
};
