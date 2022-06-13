import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from './Background';
import LeftSide from './LeftSide';
import SidebarContent from './LeftSide/SidebarContentLayout';
import RightSideLayer from './RightSide';

function DriveLayout() {
  return (
    <Background>
      <LeftSide>
        <SidebarContent></SidebarContent>
      </LeftSide>
      <RightSideLayer>
        <Outlet />
      </RightSideLayer>
    </Background>
  );
}

export default DriveLayout;
