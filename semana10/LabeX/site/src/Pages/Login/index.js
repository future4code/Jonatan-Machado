import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Login() {
  return (
    <>
      <Link to="/">Voltar à Pagina inicial</Link>
      <label>Login</label>
      <input type="text" placeholder="Digite seu login" />
      <label>Senha</label>
      <input type="text" placeholder="Digite sua senha" />
      <Link to="/admin/">
        <button>Logar</button>
      </Link>
    </>
  );
}

export default Login;
