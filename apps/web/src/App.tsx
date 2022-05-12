import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import './styles/globals.scss';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Layout>
  );
}

export default App;
