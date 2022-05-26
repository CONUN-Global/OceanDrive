import React from 'react';
import { Navigate } from 'react-router-dom';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import SplashScreen from '../pages/SplashScreen';
import Storage from '../pages/Storage/Storage';

export const authorizedRoutes = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <SplashScreen path="/storage" />,
      },
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
