import React, { useState } from 'react';

import CollectionGrid from './MarketplaceGrid';
import Data from './seedData.json';
import { SeedDataType } from './seedDataType';
import DriveLayout from 'src/components/DriveLayouts';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
        <DriveLayout>
          <CollectionGrid Data={currentData} />
        </DriveLayout>
 
  );
}

export default MarketPlace;
