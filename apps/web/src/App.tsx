import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { onboardingRoutes } from './routes/wallet';
import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;

  const routes = useRoutes(filteredRoutes);

  return (
    <Layout>
      <ReactQueryDevtools />
      <QueryClientProvider client={queryClient}>{routes}</QueryClientProvider>
    </Layout>
  );
}

export default App;
