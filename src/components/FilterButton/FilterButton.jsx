import React from 'react';
import Button from '../Button/Button';
import styles from "./FilterButton.module.css"
import data from "../../data.json" with {type:"json"}

function FilterButton({ item, setItem }) {
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={
          () => {
            setItem(data)
          }
        } >All</button>
        <button onClick={
          () => {
            const NextItem = data.filter(({ isActive }) => isActive === true);
            setItem(NextItem);
          }  }>Active</button>
        <button onClick={
          () => {
            const NextItem = data.filter(({ isActive }) => isActive === false);
            console.log(NextItem)
            setItem(NextItem)
          }  }>Inactive</button>
      </div>
    </>
  );
}

export default FilterButton;
