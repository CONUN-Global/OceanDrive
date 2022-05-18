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

  const isLoggedIn = true;
  let routes;
  isLoggedIn ? (routes = useRoutes(authorizedRoutes)) : (routes = useRoutes(filteredRoutes));

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>{routes}</QueryClientProvider>
    </Layout>
  );
}

export default App;
