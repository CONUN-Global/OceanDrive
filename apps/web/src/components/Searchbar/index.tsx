import React, { useState } from 'react';
import styles from './Searchbar.module.scss';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search_icon.svg';
import { useLocation } from 'react-router-dom';

function Searchbar() {
  const { pathname } = useLocation();

  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.SVGContainer}>
        <SearchIcon />
      </div>
      <input value={searchTerm} className={styles.Input} type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
