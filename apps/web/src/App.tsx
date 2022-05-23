import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/Layout';
import { queryClient } from './config/queryClient';
import store from './redux/store';
import { authorizedRoutes } from './routes/authorized';
import { onboardingRoutes } from './routes/wallet';
import './styles/globals.scss';

function App() {
  const location = useLocation();
  const persistor = persistStore(store);

  // in order to see storage and marketplace pages conditionally rendering routes, later we may remove test after implementing full onboarding pages
  const test = false;

  // it will be divided into authorized (user with wallet)
  // and non authorized that will pass through onboarding process
  const filteredRoutes = test ? authorizedRoutes : onboardingRoutes;

  const routes = useRoutes(filteredRoutes);

  return (
    <Layout>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <AnimatePresence exitBeforeEnter>
              <div key={location.pathname}>{routes}</div>
            </AnimatePresence>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </Layout>
  );
}

export default App;
