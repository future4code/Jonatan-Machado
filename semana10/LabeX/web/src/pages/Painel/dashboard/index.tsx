import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { VerifyLogged, Logout } from '../../../utils/VerifyLogged';

const Dashboard: React.FC = () => {
  const history = useHistory();
  VerifyLogged();

  function handleLogout() {
    try {
      Logout();
      history.push('/login');
    } catch (err) {
      console.log('erro ao deslogar');
    }
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/admin/cadastrar-viagem">
        <button> Cadastrar Viagens</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
