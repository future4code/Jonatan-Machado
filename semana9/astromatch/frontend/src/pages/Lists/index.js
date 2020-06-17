import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';

import { Title, User, List } from './styles';

function Lists() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('jonatan/matches');
      setUsers(response.data.matches);
    }
    loadData();
  }, []);

  return (
    <>
      <Header />
      <Title>LISTA DE MATCHES</Title>
      <List>
        <thead>
          <th>List</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Photo</th>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5}>Nenhum usuario :'(</td>
            </tr>
          ) : (
            users.map((user) => (
              <User key={user.id}>
                <td>#</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <img src={user.photo} />
                </td>
              </User>
            ))
          )}
        </tbody>
      </List>
    </>
  );
}

export default Lists;
