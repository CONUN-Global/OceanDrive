import React, { useState } from 'react';
import Title from '../../../components/Title';
import { SeedDataType } from '../../Marketplace/seedDataType';
import CollectionCard from './MarketplaceCard';
import styles from './MarketplaceGrid.module.scss';
import FilterButtons from './FilterButtons';

interface ICollectionGrid {
  Data: SeedDataType[];
}

function CollectionGrid({ Data }: ICollectionGrid) {
  const [currentData, setCurrentData] = useState(Data);
  return (
    <div className={styles.PageContainer}>
      <div className={styles.TitleContainer}>
        <Title>MarketPlace</Title>
        <FilterButtons data={currentData} setData={setCurrentData} />
      </div>
      <div className={styles.GridContainer}>
        {Data.map(DataItem => (
          <CollectionCard page="market-place" key={DataItem.id} DataItem={DataItem} />
        ))}
      </div>
    </div>
  );
}

export default CollectionGrid;
