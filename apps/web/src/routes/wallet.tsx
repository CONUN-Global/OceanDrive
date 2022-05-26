import React from 'react';
import { Navigate } from 'react-router-dom';
import Onboarding from '../pages/Onboarding';
import CreateWallet from '../pages/Onboarding/CreateWallet';
import ImportWallet from '../pages/Onboarding/ImportWallet';
import SplashScreen from '../pages/SplashScreen';
import ConfirmCreate from '../pages/Onboarding/CreateWallet/ConfirmCreate';

export const onboardingRoutes = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <SplashScreen path="/wallet" />,
      },
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
            element: <ImportWallet />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/wallet" replace />,
  },
];
