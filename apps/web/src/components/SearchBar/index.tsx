import React, { useState } from 'react';
import SearchIcon from 'src/assets/icons/search_icon.svg';
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
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
