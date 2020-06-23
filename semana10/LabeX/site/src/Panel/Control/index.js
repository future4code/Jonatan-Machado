import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Control() {
  return (
    <>
      <Link to="/login">Logout</Link>
      <h1>Painel de controle</h1>
      <Link to="/admin/novo-usuario">Novo usuário</Link>
      <Link to="/admin/nova-viagem">Nova viagem</Link>
    </>
  );
}

export default Control;
