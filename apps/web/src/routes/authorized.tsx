import React from 'react';
import Main from 'src/pages/Main';
import Storage from 'src/pages/Storage/Storage';

export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/storage',
    element: <Storage />,
  },
];
