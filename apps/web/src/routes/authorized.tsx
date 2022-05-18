import React from 'react';
import Main from 'src/pages/Main';
import Storage from 'src/pages/Storage/Storage';
import StorageFilledDemo from 'src/pages/StorageFilledDemo/StorageFilledDemo';

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
    path: '/storage-filled-demo',
    element: <StorageFilledDemo />,
  },
];
