import React from 'react';
import Wallet from '../pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import SplashScreen from '../pages/SplashScreen';
import Storage from '../pages/Publish/Publish';
import Profile from '../pages/Profile';
import Host from '../pages/Host';
import DriveLayout from '../components/DriveLayouts';

export const authorizedRoutes = [
  {
    path: '/',
    element: <DriveLayout />,
    children: [
      {
        index: true,
        element: <SplashScreen path="/publish" />,
      },
      { path: 'wallet', element: <Wallet /> },
      { path: 'publish', element: <Storage /> },
      {
        path: 'marketplace',
        children: [
          { index: true, element: <MarketPlace /> },
          { path: ':collection/:id', element: <SingleItem /> },
        ],
      },
      { path: 'profile', element: <Profile /> },
      { path: 'host', element: <Host /> },
    ],
  },
];
