import React, { useState } from 'react';

// import styles from './Marketplace.module.scss';

import CollectionGrid from 'src/pages/Marketplace/MarketplaceGrid';
import Filter from './FilterSidebar';

import Data from './seedData.json';
import { SeedDataType } from './seedDataType';
import GreyishBackground from 'src/components/MainBackground/MainBackground';
import RightSideLayer from 'src/components/RightSideLayer/RightSideLayer';
// import TitleAndSearch from 'src/components/TitleAndSearch';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
    <GreyishBackground>
      <Filter Data={currentData} setCurrentData={setCurrentData} />
      <RightSideLayer title={'Marketplace'}>
        {/* <TitleAndSearch>Marketplace</TitleAndSearch> */}
        <CollectionGrid Data={currentData} />
      </RightSideLayer>
    </GreyishBackground>
  );
}

export default MarketPlace;
