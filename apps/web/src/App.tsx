import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import Main from './pages/Main';
import './styles/globals.scss';

function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </QueryClientProvider>
    </Layout>
  );
}

export default App;
