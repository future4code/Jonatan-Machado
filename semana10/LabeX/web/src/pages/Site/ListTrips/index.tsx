import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

// import { Container } from './styles';

const ListTrips: React.FC = () => {
  const [listTrips, setListTrips] = useState([]);
  useEffect(() => {
    api.get('jonatan-machado/trips').then((response) => {
      setListTrips(response.data.trips);
      console.log(response.data);
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTrips;
