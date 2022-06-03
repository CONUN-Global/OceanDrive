import React from 'react';
// import SearchBar from './SearchBar';
import SearchBar from '../Searchbar';
import FilterBar from './FilterBar';
import styles from './TitleAndSearch.module.scss';

interface IProps {
  children: React.ReactNode;
}

function TitleAndSearch({ children }: IProps) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>{children}</h1>
      <div className={styles.SearchAndSort}>
        <FilterBar />
      </div>
    </div>
  );
}

export default TitleAndSearch;
