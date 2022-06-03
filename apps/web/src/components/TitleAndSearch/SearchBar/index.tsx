import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search_icon.svg';
import useGetImage from 'src/hooks/useGetImage';
import styles from './Searchbar.module.scss';

function SearchBar() {
  const [inputtedText, setInputtedText] = useState('');

  // const { data } = useGetImage(inputtedText);

  return (
    <div className={styles.Search}>
      <form onSubmit={e => e.preventDefault()}>
        <input placeholder="Search" type="text" value={inputtedText} onChange={e => setInputtedText(e.target.value)} />
        <SearchIcon />
      </form>
    </div>
  );
}

export default SearchBar;
