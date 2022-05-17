import React from 'react';
import Main from 'src/pages/Main';
import MarketPlace from 'src/pages/Marketplace';

export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/marketplace',
    element: <MarketPlace />,
  },
];
