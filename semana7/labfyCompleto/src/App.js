import React from 'react';
import Global from './styles/global';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
