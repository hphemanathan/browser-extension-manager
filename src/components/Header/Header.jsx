import React from 'react';
import styles from "./Header.module.css";
import ThemeButton from '../ThemeButton/ThemeButton';

function Header({ theme, setTheme, switchTheme }) {
  return (
    <div className={styles.wrapper}>
      <img src='src/assets/logo.svg' alt='company logo' />
      <ThemeButton
        switchTheme={switchTheme}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default Header;
