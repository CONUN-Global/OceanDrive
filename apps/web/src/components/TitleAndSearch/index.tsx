import React from 'react';
import SearchBar from '../SearchBar';
import styles from './TitleAndSearch.module.scss';

interface IProps {
  children: React.ReactNode;
}

function TitleAndSearch({ children }: IProps) {
  return (
    <div className={styles.Container}>
      <h1>{children}</h1>
      <div>
        {/* FILTER ITEMS GO HERE */}
        <SearchBar />
      </div>
    </div>
  );
}

export default TitleAndSearch;
