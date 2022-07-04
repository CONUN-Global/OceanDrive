import React from 'react';
import Wallet from '../pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import SplashScreen from '../pages/SplashScreen';
import DropFile from '../pages/DropFile';
import Profile from '../pages/Profile';
import Host from '../pages/Host';
import DriveLayout from '../components/DriveLayouts';
import Publish from '../pages/Publish';

import Lock from '../pages/Lock';

export const authorizedRoutes = [
  {
    path: '/',
    element: <DriveLayout />,
    children: [
      {
        index: true,
        element: <SplashScreen path="/marketplace" />,
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
    path: 'lock',
    element: <Lock />,
  },
];
