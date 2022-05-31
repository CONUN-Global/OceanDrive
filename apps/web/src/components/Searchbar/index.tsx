import React, { useState } from 'react';
import styles from './Searchbar.module.scss';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search_icon.svg';
import { useLocation } from 'react-router-dom';

function Searchbar() {
  const { pathname } = useLocation();
  console.log(location);

  // JUST AN IDEA
  let placeholder = 'Search';
  if (pathname.startsWith('/marketplace')) placeholder = 'Search Marketplace';
  if (pathname.startsWith('/wallet')) placeholder = 'Search Files';
  if (pathname.startsWith('/publish')) placeholder = 'Search Files';

  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.SVGContainer}>
        <SearchIcon />
      </div>
      <input value={searchTerm} className={styles.Input} type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
