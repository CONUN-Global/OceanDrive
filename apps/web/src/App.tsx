import React from 'react';
import { queryClient } from './config/queryClient';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRoutes } from 'react-router-dom';
import { onboardingRoutes } from './routes/wallet';

import Layout from './components/Layout';

import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;

  const routes = useRoutes(filteredRoutes);

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
