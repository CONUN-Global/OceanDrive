import React, { useState } from 'react';
import RightSideLayer from 'src/components/DriveLayouts/RightSide';
import MainBackground from 'src/components/DriveLayouts/Background/index';

import LeftSideLayer from 'src/components/DriveLayouts/LeftSide';
import SidebarContent from 'src/components/DriveLayouts/LeftSide/SidebarContentLayout';
import Filter from './FilterSidebar';
import CollectionGrid from './MarketplaceGrid';
import Data from './seedData.json';
import { SeedDataType } from './seedDataType';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
    <MainBackground>
      <LeftSideLayer>
        <SidebarContent>
          <Filter Data={currentData} setCurrentData={setCurrentData} />
        </SidebarContent>
      </LeftSideLayer>
      <RightSideLayer>
        <CollectionGrid Data={currentData} />
      </RightSideLayer>
    </MainBackground>
  );
}

export default MarketPlace;
