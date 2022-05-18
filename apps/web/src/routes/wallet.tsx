import React from 'react';
import CreateWallet from 'src/pages/Onboarding/CreateWallet';
import ConfirmCreate from '../pages/Onboarding/CreateWallet/ConfirmCreate';
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
        children: [
          {
            path: '',
            element: <CreateWallet />,
          },
          {
            path: 'confirm',
            element: <ConfirmCreate />,
          },
        ],
      },
      {
        path: 'import',
        element: <CreateWallet />,
      },
    ],
  },
];
