import React from 'react';
import FilterButtons from './FilterButtons';
import styles from './TitleAndSearch.module.scss';

interface IProps {
  children: React.ReactNode;
}

function TitleAndSearch({ children }: IProps) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>{children}</h1>
      <div className={styles.SearchAndSort}>
        <FilterButtons />
      </div>
    </div>
  );
}

export default TitleAndSearch;
