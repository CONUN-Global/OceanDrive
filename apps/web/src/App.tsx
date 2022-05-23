import { AnimatePresence } from 'framer-motion';
import React from 'react';
// import useStore from './store/store';
import { useLocation, useRoutes } from 'react-router-dom';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';

import Layout from './components/Layout';
import useUserStatus from './hooks/useUserStatus';

import { queryClient } from './config/queryClient';
import { authorizedRoutes } from './routes/authorized';
import { onboardingRoutes } from './routes/wallet';
import './styles/globals.scss';

function App() {
  const location = useLocation();

  // in order to see storage and marketplace pages conditionally rendering routes, later we may remove test after implementing full onboarding pages
  const test = false;

  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process

  const isUserLoggedIn = useUserStatus();

  const mainRoutes = useRoutes(authorizedRoutes);

  // in order to see storage and marketplace pages, please delete localStorage -userLoggedIn,
  const filteredRoutes = isUserLoggedIn ? authorizedRoutes : onboardingRoutes;

  const routes = useRoutes(filteredRoutes);

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AnimatePresence exitBeforeEnter>
          <div key={location.pathname}>{routes}</div>
        </AnimatePresence>
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
