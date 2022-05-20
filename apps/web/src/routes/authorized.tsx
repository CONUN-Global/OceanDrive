import React from 'react';

import Main from 'src/pages/Main';
import MarketPlace from 'src/pages/Marketplace';
import SingleItem from 'src/pages/SingleItem';

import Storage from 'src/pages/Storage/Storage';
import StorageWithItems from 'src/pages/StorageWithItems/StorageWithItems';

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
  {
    path: '/storage-with-items',
    element: <StorageWithItems />,
  },
];