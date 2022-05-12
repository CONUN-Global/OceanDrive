import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/queryClient';

function App() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
