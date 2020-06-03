import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { toast } from 'react-toastify';
import { Container, Register } from './styles';

function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get('/users', {
        headers: {
          Authorization: 'jonatan-machado-mello',
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  async function handleRemoveUser(id) {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: 'jonatan-machado-mello',
        },
      });
      toast.success('Usuario removido 😎');
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      toast.error('Deu ruim😕');
    }
  }

  return (
    <>
      <Link to="/">
        <Register>Voltar</Register>
      </Link>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => handleRemoveUser(user.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default List;
