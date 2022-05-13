import React from 'react';
import CreateWallet from 'src/pages/Onboarding/CreateWallet';
import Onboarding from '../pages/Onboarding';

export const onboardingRoutes = [
  {
    path: 'wallet',
    children: [
      {
        path: '',
        element: <Onboarding />,
      },
      {
        path: 'create',
        element: <CreateWallet />,
      },
      {
        path: 'import',
        element: <CreateWallet />,
      },
    ],
  },
];
