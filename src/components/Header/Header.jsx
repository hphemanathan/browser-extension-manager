import React from 'react';
import styles from "./Header.module.css";
import ThemeButton from '../ThemeButton/ThemeButton';

function Header() {
  return (
    <div className={styles.wrapper}>
      <img src='src/assets/logo.svg' alt='company logo' />
      <ThemeButton/>
    </div>
  );
}

export default Header;
