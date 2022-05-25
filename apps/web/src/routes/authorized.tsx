import React from 'react';
import { Navigate } from 'react-router-dom';
import Wallet from 'src/pages/Wallet';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import Storage from '../pages/Storage/Storage';

export const authorizedRoutes = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <Navigate to="/storage" />,
      },
      { path: 'wallet', element: <Wallet /> },
      { path: 'storage', element: <Storage /> },
      {
        path: 'marketplace',
        children: [
          { path: '', element: <MarketPlace /> },
          { path: ':collection/:id', element: <SingleItem /> },
        ],
      },
    ],
  },
];
