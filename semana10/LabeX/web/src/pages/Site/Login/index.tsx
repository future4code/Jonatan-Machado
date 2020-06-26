import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

// import { Container } from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem('token');

  const history = useHistory();

  useEffect(() => {
    isLogged();
  }, []);

  function isLogged() {
    if (token !== null) {
      history.push('/admin/');
    }
  }

  function Login(e: any) {
    setUser(e.target.value);
  }
  function Password(e: any) {
    setPassword(e.target.value);
  }

  const body = {
    email: user,
    password: password,
  };

  async function handleLogin(e: any) {
    e.preventDefault();
    try {
      const response = await api.post('jonatan-machado/login', body);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      history.push('/admin/');
    } catch (err) {
      console.log('erro', err);
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Login</label>
        <input value={user} onChange={Login} type="email" />
        <label htmlFor="password">Senha</label>
        <input value={password} onChange={Password} type="password" />
        <button type="submit">Logar</button>
      </form>
    </>
  );
};

export default Login;
