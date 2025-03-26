import React from 'react';
import Button from '../Button/Button';
import styles from "./FilterButton.module.css"

function FilterButton() {
  return (
    <>
      <div className={styles.wrapper}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </>
  );
}

export default FilterButton;
