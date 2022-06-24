import React from 'react';
import TitleAndSearch from '../../../components/TitleAndSearch';
import { SeedDataType } from '../../Marketplace/seedDataType';
import CollectionCard from './MarketplaceCard';
import styles from './MarketplaceGrid.module.scss';

interface ICollectionGrid {
  Data: SeedDataType[];
}

function CollectionGrid({ Data }: ICollectionGrid) {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.TitleContainer}>
        <TitleAndSearch>MarketPlace</TitleAndSearch>
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
