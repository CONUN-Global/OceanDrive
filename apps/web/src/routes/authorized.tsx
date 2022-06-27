import React from 'react';
import Wallet from '../pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import Storage from '../pages/Publish/Publish';
import Profile from '../pages/Profile';
import Host from '../pages/Host';
import DriveLayout from '../components/DriveLayouts';
import { Navigate } from 'react-router-dom';

export const authorizedRoutes = [
  {
    path: '/',
    element: <DriveLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/publish" replace />,
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
    element: <Navigate to="/publish" replace />,
  },
];
