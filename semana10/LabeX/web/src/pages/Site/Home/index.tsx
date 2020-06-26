import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Registre-se</button>
      </Link>
    </>
  );
};

export default Home;
