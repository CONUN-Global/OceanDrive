import React, { useState } from 'react';

import styles from './Marketplace.module.scss';

import CollectionGrid from 'src/pages/Marketplace/MarketplaceGrid';
import Filter from './FilterSidebar';

import Data from './seedData.json';
import { SeedDataType } from './seedDataType';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
    <div className={styles.Container}>
      <Filter Data={currentData} setCurrentData={setCurrentData} />
      <CollectionGrid Data={currentData} />;
    </div>
  );
}

export default MarketPlace;
