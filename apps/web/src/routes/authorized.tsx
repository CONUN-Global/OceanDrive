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
import { Navigate } from 'react-router-dom';

export const authorizedRoutes = [
  {
    path: '/',
    element: <DriveLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/marketplace" replace />,
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
    path: '*',
    element: <Navigate to="/marketplace" replace />,
  },
];
