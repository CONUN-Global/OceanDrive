import React from 'react';
import { QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { onboardingRoutes } from './routes/wallet';
import { authorizedRoutes } from './routes/authorized';
import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;
  const unfilteredRoutes = authorizedRoutes;

  const routes = useRoutes(filteredRoutes);
  const authRoutes = useRoutes(unfilteredRoutes);

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        {authRoutes}
        {routes}
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
