import React from 'react';
import Button from '../Button/Button';
import styles from "./Extension.module.css"
import Toggle from '../Toggle/Toggle';

function Extension({ logo, name, isActive, description }) {
  const [isEnabled, setIsEnabled] = React.useState(isActive);
  // console.log(isEnabled);
  return (
    
    <>
      <div className={styles.wrapper}>
        <img src={logo} alt='' />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <Button>Remove</Button>
        <Toggle
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
          // value={isActive}
        />
      </div>
    </>
  );
}

export default Extension;
