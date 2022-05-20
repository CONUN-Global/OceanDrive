import React from 'react';

import CollectionCard from './MarketplaceCard';

import { SeedDataType } from 'src/pages/Marketplace/seedDataType';

import styles from './MarketplaceGrid.module.scss';
import TitleAndSearch from 'src/components/TitleAndSearch';

interface ICollectionGrid {
  Data: SeedDataType[];
}

function CollectionGrid({ Data }: ICollectionGrid) {
  return (
    <div className={styles.PageContainer}>
      <TitleAndSearch>MarketPlace</TitleAndSearch>
      <div className={styles.GridContainer}>
        {Data.map(DataItem => (
          <CollectionCard key={DataItem.id} DataItem={DataItem} />
        ))}
      </div>
    </div>
  );
}

export default CollectionGrid;
