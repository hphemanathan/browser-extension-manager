import React from 'react';
import Button from '../Button/Button';
import styles from "./Extension.module.css"
import Toggle from '../Toggle/Toggle';

function Extension({ logo, name, isActive, description }) {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='' />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button>Remove</Button>
        <Toggle/>
      </div>
    </div>
  );
}

export default Extension;
