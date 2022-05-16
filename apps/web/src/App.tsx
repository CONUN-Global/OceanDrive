import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import { onboardingRoutes } from './routes/wallet';
import './styles/globals.scss';
import Storage from './pages/Storage/Storage';
import Main from './pages/Main';

function App() {
  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = onboardingRoutes;

  const routes = useRoutes(filteredRoutes);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
