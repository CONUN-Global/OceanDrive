import React from 'react';
import { Navigate } from 'react-router-dom';
import Wallet from '../pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import SplashScreen from '../pages/SplashScreen';
import Storage from '../pages/Publish/Publish';
import Profile from 'src/pages/Profile';

export const authorizedRoutes = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <SplashScreen path="/publish" />,
      },
      { path: 'wallet', element: <Wallet /> },
      { path: 'publish', element: <Storage /> },
      {
        path: 'marketplace',
        children: [
          { path: '', element: <MarketPlace /> },
          { path: ':collection/:id', element: <SingleItem /> },
        ],
      },
      {path: 'profile', element: <Profile />}
    ],
  },
];
