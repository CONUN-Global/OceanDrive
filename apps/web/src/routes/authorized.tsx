import React from 'react';

import Main from 'src/pages/Main';
import MarketPlace from 'src/pages/Marketplace';
import SingleItem from 'src/pages/SingleItem';

export const authorizedRoutes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'marketplace',
    children: [
      { index: true, element: <MarketPlace /> },
      { path: ':collection/:id', element: <SingleItem /> },
    ],
  },
];
