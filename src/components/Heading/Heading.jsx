import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import Button from '../Button/Button';
import styles from "./Heading.module.css"


function Heading({ item, setItem }) {
  return (
    <div className={styles.wrapper}>
      <h1>Extensions List</h1>
      <FilterButton item={item} setItem={setItem} />
    </div>
  );
}

export default Heading;
