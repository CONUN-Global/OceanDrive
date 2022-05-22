import React from 'react';
import Main from '../pages/Main';
import MarketPlace from '../pages/Marketplace';
import SingleItem from '../pages/SingleItem';
import Storage from '../pages/Storage/Storage';



export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />,
  },
  { path: 'storage', element: <Storage /> },
  {
    path: 'marketplace',
    children: [
      { path: '', element: <MarketPlace /> },
      { path: ':collection/:id', element: <SingleItem /> },
    ],
  },
];
