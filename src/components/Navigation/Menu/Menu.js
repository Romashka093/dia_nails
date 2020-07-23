import React from 'react';
import { Link } from 'react-router-dom';
// Redirect
// import styles from './Menu.module.css';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/about">Про нас</Link>
      </li>
      <li>
        <Link to="/price">Ціни</Link>
      </li>
      <li>
        <Link to="/gallery">Галерея</Link>
      </li>
      <li>
        <Link to="/contacts">Контакти</Link>
      </li>
    </ul>
  );
};

export default Menu;
