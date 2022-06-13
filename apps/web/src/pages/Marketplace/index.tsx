import React, { useState } from 'react';

import CollectionGrid from './MarketplaceGrid';
import Data from './seedData.json';
import { SeedDataType } from './seedDataType';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return <CollectionGrid Data={currentData} />;
}

export default MarketPlace;
