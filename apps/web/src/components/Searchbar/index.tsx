import React, { useState } from 'react';
import styles from './Searchbar.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import useGetImage from '../../hooks/useGetImage';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data } = useGetImage(searchTerm);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  console.log(data);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.SVGContainer}>
          <SearchIcon />
        </div>
        <input value={searchTerm} className={styles.Input} type="text" placeholder="Search" onChange={handleChange} />
      </div>
      {data && <img src={data} width={50} height={50} />}
    </>
  );
}

export default Searchbar;
