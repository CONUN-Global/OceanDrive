import React from 'react';
import Wallet from '../pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import SplashScreen from '../pages/SplashScreen';
import DropFile from '../pages/DropFile';
import Profile from 'src/pages/Profile';
import Host from 'src/pages/Host';
import DriveLayout from 'src/components/DriveLayouts';
import Publish from '../pages/Publish';
import Settings from '../pages/Settings';
import Lock from 'src/pages/Lock';

export const authorizedRoutes = [
  {
    path: '/',
    element: <DriveLayout />,
    children: [
      {
        index: true,
        element: <SplashScreen path="/publish" />,
      },
      { path: 'profile', element: <Profile /> },
      { path: 'wallet', element: <Wallet /> },
      { path: 'publish', element: <Publish /> },
      { path: 'host', element: <Host /> },
      { path: 'dropfile', element: <DropFile /> },
      {
        path: 'marketplace',
        children: [
          { index: true, element: <MarketPlace /> },
          { path: ':collection/:id', element: <SingleItem /> },
        ],
      },
    ],
  },
  {
    path: 'settings',
    element: <Settings />,
  },
  {
    path: 'lock',
    element: <Lock />,
  },
];
