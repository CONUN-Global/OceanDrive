import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { onboardingRoutes } from './routes/wallet';
import { authorizedRoutes } from './routes/authorized';
import './styles/globals.scss';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const [isUserLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const test = JSON.parse(localStorage.getItem('test') || 'null');

    setUserLoggedIn(test);
  });
  const filteredRoutes = onboardingRoutes;

  const routes = useRoutes(filteredRoutes);
  const mainRoutes = useRoutes(authorizedRoutes);

  // in order to see storage and marketplace pages conditionally rendering routes, later we may remove test after implementing full onboarding pages

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {isUserLoggedIn ? mainRoutes : routes}
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
