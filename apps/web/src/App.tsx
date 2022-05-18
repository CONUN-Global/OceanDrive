import React from 'react';
import { queryClient } from './config/queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRoutes } from 'react-router-dom';
import { onboardingRoutes } from './routes/wallet';
import { authorizedRoutes } from './routes/authorized';

import Layout from './components/Layout';

import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;

  const isLoggedIn = true;
  let routes;
  isLoggedIn ? (routes = useRoutes(authorizedRoutes)) : (routes = useRoutes(filteredRoutes));

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {routes}
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
