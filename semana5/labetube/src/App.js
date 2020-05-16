import React from 'react';

//components
import Search from './components/Search.js';
import Nav from './components/Nav.js';
import Video from './components/Video.js';
import Footer from './components/Footer.js';

import './App.css';

function App() {
  return (
    <>
      <div className='tela-inteira'>
        <Search />
        <main>
          <Nav />
          <Video />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
