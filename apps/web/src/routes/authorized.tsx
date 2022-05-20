import React from 'react';
import Main from '../pages/Main';
import Storage from '../pages/Storage/Storage';

export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/storage',
    element: <Storage />
  }
];
