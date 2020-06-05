import React, { useState } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, ListUser } from './styles';

function Register() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleAddUser(e) {
    e.preventDefault();
    const data = {
      name,
      email,
    };
    try {
      const response = await api.post('users', data, {
        headers: { Authorization: 'jonatan-machado-mello' },
      });
      const user = response.data;
      setUsers([...users, user]);
      toast.success('Usuario cadastrado 😀');
    } catch (err) {
      toast.error('Deu ruim😕');
    }
  }

  return (
    <>
      <Link to="/list">
        <ListUser>Listagem de usuario</ListUser>
      </Link>
      <Container>
        <form onSubmit={handleAddUser}>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
      </Container>
    </>
  );
}

export default Register;
