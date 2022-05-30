import React from 'react';
import styles from './Searchbar.module.scss';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search_icon.svg';

function Searchbar() {
  return (
    <div className={styles.Container}>
      <div className={styles.SVGContainer}>
        <SearchIcon />
      </div>
      <input className={styles.Input} type="text" placeholder="Search Here" />
    </div>
  );
}

export default Searchbar;
