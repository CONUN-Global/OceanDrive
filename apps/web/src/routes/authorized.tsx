import React from 'react';
import Main from 'src/pages/Main';
import Storage from 'src/pages/Storage/Storage';
import StorageWithItems from 'src/pages/StorageWithItems/StorageWithItems';

export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/storage',
    element: <Storage />,
  },
  {
    path: '/storage-with-items',
    element: <StorageWithItems />,
  },
];
