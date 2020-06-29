import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import { VerifyLogged } from '../../../utils/VerifyLogged';

// import { Container } from './styles';

const ListTrips: React.FC = () => {
  const [listTrips, setListTrips] = useState([]);

  VerifyLogged();

  useEffect(() => {
    api.get('jonatan-machado/trips').then((response) => {
      setListTrips(response.data.trips);
    });
  }, []);

  let lists: string[] = listTrips;
  return (
    <>
      <table>
        <thead>
          <th />
          <th>Nome da Viagem</th>
          <th>Planeta</th>
          <th>Data</th>
          <th>Descrição</th>
          <th>Duração em dias (Terra)</th>
        </thead>
        <tbody>
          {lists.map((trip: any) => (
            <tr>
              <td>{trip.name}</td>
              <td>{trip.planet}</td>
              <td>{trip.date}</td>
              <td>{trip.description}</td>
              <td>{trip.durationInDays}</td>
              <td>
                <Link to={`/admin/detalhes-da-viagem/${trip.id}`}>
                  Ver Candidatos
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTrips;
