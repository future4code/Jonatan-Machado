import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
  return (
    <>
      <Link to="/sobre">sobre</Link>
      <Link to="/login">Login</Link>
      <h1>Home</h1>
    </>
  );
}

export default Home;
