import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
