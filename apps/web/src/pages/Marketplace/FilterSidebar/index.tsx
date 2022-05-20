import React from 'react';

import { SeedDataType } from '../seedDataType';

import styles from './Filter.module.scss';

interface IFilter {
  Data: SeedDataType[];
  setCurrentData: (data: SeedDataType[]) => void;
}

function Filter({ Data, setCurrentData }: IFilter) {
  function clickHandler() {
    console.log('To handle clicks from dynamically made checkBoxes');
  }

  // This needs to be changed/// Filter bar does not sort by price
  const handleMin = () => setCurrentData([...Data].sort((a, b) => a.price - b.price));
  const handleMax = () => setCurrentData([...Data].sort((a, b) => b.price - a.price));

  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Filter</h2>

      {/* Price */}
      <div className={styles.SelectionContainer}>
        <h3 className={styles.Subtitle}>Price (USD)</h3>
        <div className={styles.BtnContainer}>
          <button onClick={handleMin}>Min</button>
          <button onClick={handleMax}>Max</button>
        </div>
      </div>

      {/* Currency */}
      <div className={styles.SelectionContainer}>
        <h3 className={styles.Subtitle}>Currency</h3>
        <label htmlFor="ETH" className={styles.CheckboxContainer}>
          <input className={styles.Input} id="ETH" type="checkbox" onClick={clickHandler} />
          ETH
        </label>
        <label className={styles.CheckboxContainer}>
          <input className={styles.Input} type="checkbox" onClick={clickHandler} />
          Cycon
        </label>
      </div>

      {/* Fix -- Collection -- This should be made dynamically*/}
      <div className={styles.SelectionContainer}>
        <h3 className={styles.Subtitle}>Collection</h3>
        <label className={styles.CheckboxContainer}>
          <input className={styles.Input} type="checkbox" onClick={clickHandler} />
          Blocking the Entrance
        </label>

        <label className={styles.CheckboxContainer}>
          <input className={styles.Input} type="checkbox" onClick={clickHandler} />
          Chogo
        </label>

        <label className={styles.CheckboxContainer}>
          <input className={styles.Input} type="checkbox" onClick={clickHandler} />
          Rhythm of Jaws
        </label>

        <label className={styles.CheckboxContainer}>
          <input className={styles.Input} type="checkbox" onClick={clickHandler} />
          Kake Kreation
        </label>
      </div>
    </div>
  );
}

export default Filter;
