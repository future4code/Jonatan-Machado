import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';
import api from '../../../services/api';

import { VerifyLogged } from '../../../utils/VerifyLogged';

interface body {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  VerifyLogged();

  function onchangePassword(e: any) {
    setPassword(e.target.value);
  }
  function onchangeEmail(e: any) {
    setEmail(e.target.value);
  }

  const body: body = {
    email: email,
    password: password,
  };

  function handleLogin(e: any) {
    e.preventDefault();
    api.post('jonatan-machado/signup', body);
    console.log('cadastro ok');
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-mail</label>
        <input value={email} onChange={onchangeEmail} type="email" required />
        <label htmlFor="password">Senha</label>
        <input
          value={password}
          onChange={onchangePassword}
          type="password"
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default Register;
