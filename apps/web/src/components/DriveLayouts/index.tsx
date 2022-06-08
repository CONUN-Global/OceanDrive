import React, { ReactNode } from 'react';
import Background from './Background';
import LeftSide from './LeftSide';
import SidebarContent from './LeftSide/SidebarContentLayout';
import RightSideLayer from './RightSide';

interface IPageProps {
  children?: ReactNode;
}

function DriveLayout({ children }: IPageProps) {
  return (
    <Background>
      <LeftSide>
        <SidebarContent></SidebarContent>
      </LeftSide>
      <RightSideLayer>{children}</RightSideLayer>
    </Background>
  );
}

export default DriveLayout;
