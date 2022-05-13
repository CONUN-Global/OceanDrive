import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import Main from './pages/Main';
import MarketPlace from './pages/Marketplace';
import './styles/globals.scss';

// import { queryClient } from './react-query/config';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
