import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

function NewUser() {
  return (
    <>
      <Link to="/admin/">Voltar ao painel</Link>
      <h1>Cadastro de novo usuário</h1>
    </>
  );
}

export default NewUser;
