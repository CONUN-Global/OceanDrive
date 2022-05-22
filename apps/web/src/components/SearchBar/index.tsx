import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import styles from './Searchbar.module.scss';

function SearchBar() {
  const [inputtedText, setInputtedText] = useState('');

  return (
    <div className={styles.Search}>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Search"
          type="text"
          value={inputtedText}
          onChange={e => {
            setInputtedText(e.target.value);
          }}
        />
        <SearchIcon />
      </form>
    </div>
  );
}

export default SearchBar;
