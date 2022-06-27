import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useSelector } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';

import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { authorizedRoutes } from './routes/authorized';
import { onboardingRoutes } from './routes/wallet';

import './styles/globals.scss';

function App() {
  const location = useLocation();
  const isAuth = useSelector<any>(store => store.authSlice.isAuth);

  const filteredRoutes = isAuth ? authorizedRoutes : onboardingRoutes;

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
