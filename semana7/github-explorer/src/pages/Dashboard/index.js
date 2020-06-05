import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

function Dashboard() {
  const [newRepo, setNewRepo] = useState('');
  const { repositories, setRepositories } = useState([]);

  async function handleAddRepository(e) {
    e.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="Explore Github" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button>Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map((repository) => (
          <div>
            <a key={repository.full_name} href="#">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
            </a>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </div>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
