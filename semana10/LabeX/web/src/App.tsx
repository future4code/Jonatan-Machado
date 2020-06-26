import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Header />
      <Footer />
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default App;
