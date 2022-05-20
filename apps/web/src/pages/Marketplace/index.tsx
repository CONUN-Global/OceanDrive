import React, { useState } from 'react';

import CollectionGrid from 'src/pages/Marketplace/MarketplaceGrid';
import Filter from './FilterSidebar';

import Data from './seedData.json';
import { SeedDataType } from './seedDataType';
import MainBackground from 'src/components/DriveLayouts/Background';
import RightSideLayer from 'src/components/DriveLayouts/RightSide';
import LeftSideLayer from 'src/components/DriveLayouts/LeftSide';
import SidebarContent from 'src/components/DriveLayouts/LeftSide/SidebarContentLayout';

function MarketPlace() {
  const [currentData, setCurrentData] = useState<SeedDataType[]>(Data);

  return (
    <MainBackground>
      <LeftSideLayer>
        <SidebarContent>
          <Filter Data={currentData} setCurrentData={setCurrentData} />
        </SidebarContent>
      </LeftSideLayer>
      <RightSideLayer title={'Marketplace'}>
        <CollectionGrid Data={currentData} />
      </RightSideLayer>
    </MainBackground>
  );
}

export default MarketPlace;
