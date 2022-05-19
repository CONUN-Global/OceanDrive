import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { authorizedRoutes } from './routes/authorized';
import { onboardingRoutes } from './routes/wallet';
import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;

  const routes = useRoutes(filteredRoutes);
  const mainRoutes = useRoutes(authorizedRoutes);

  // in order to see storage and marketplace pages conditionally rendering routes, later we may remove test after implementing full onboarding pages
  const test = true;

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {test ? mainRoutes : routes}
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
