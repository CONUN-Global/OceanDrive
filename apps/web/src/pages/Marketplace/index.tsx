import React, { useState } from 'react';
import LeftSideLayer from '../../components/DriveLayouts/LeftSide';
import SidebarContent from '../../components/DriveLayouts/LeftSide/SidebarContentLayout';
import RightSideLayer from '../../components/DriveLayouts/RightSide';
import MainBackground from '../../components/DriveLayouts/Background/index';
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
      <RightSideLayer title={'Marketplace'}>
        <CollectionGrid Data={currentData} />
      </RightSideLayer>
    </MainBackground>
  );
}

export default MarketPlace;
