import React from 'react';
import CollectionCard from '../CollectionCard';
import styles from './CollectionGrid.module.scss';

function CollectionGrid() {
  return (
    <div className={styles.GridContainer}>
      <CollectionCard cardNumber="01" />
      <CollectionCard cardNumber="02" />
      <CollectionCard cardNumber="03" />
      <CollectionCard cardNumber="04" />
      <CollectionCard cardNumber="06" />
      <CollectionCard cardNumber="07" />
      <CollectionCard cardNumber="09" />
      <CollectionCard cardNumber="10" />
      <CollectionCard cardNumber="11" />
      <CollectionCard cardNumber="12" />
      <CollectionCard cardNumber="13" />
    </div>
  );
}

export default CollectionGrid;
