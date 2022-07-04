import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from 'src/redux/store';
import Settings from '../SettingsModal';
import Background from './Background';
import LeftSide from './LeftSide';
import SidebarContent from './LeftSide/SidebarContentLayout';
import RightSideLayer from './RightSide';

function DriveLayout() {
  const SettingsShowing = useSelector(({ settingsReducer }: RootState) => settingsReducer.settingsModalIsOpen);

  return (
    <Background>
      <LeftSide>
        <SidebarContent></SidebarContent>
      </LeftSide>
      <RightSideLayer>
        <Outlet />
      </RightSideLayer>
      {SettingsShowing ? <Settings /> : null}
    </Background>
  );
}

export default DriveLayout;
