import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import { VerifyLogged } from '../../../utils/VerifyLogged';

interface body {
  name: string;
  planet: string;
  date: string;
  description: string;
  duration: number;
}

const CreateTrips: React.FC = () => {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [durationInDay, setDurationInDay] = useState(0);

  VerifyLogged();

  const planets: string[] = [
    'Mercúrio',
    'Vênus',
    'Terra',
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
  ];

  function ChangeName(e: any) {
    setName(e.target.value);
  }

  function ChangePlanet(e: any) {
    setPlanet(e.target.value);
    console.log(planet);
  }

  function ChangeDescription(e: any) {
    setDescription(e.target.value);
  }

  function ChangeDate(e: any) {
    setDate(e.target.value);
  }

  function ChangeDuration(e: any) {
    setDurationInDay(e.target.value);
  }

  let body: body = {
    name: name,
    date: date,
    description: description,
    planet: planet,
    duration: durationInDay,
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const token = getToken();

  let header: Auth = {
    auth: token,
  };
  console.log(header);

  interface Auth {
    auth: string | null;
  }

  async function handleCreateTrip(e: any) {
    e.preventDefault();

    try {
      await api.post('jonatan-machado/trips', body, Headers);
      console.log('Cadastro feito!');
    } catch (err) {
      console.log('erro ao cadastrar viagem!');
    }
  }

  return (
    <>
      <form onSubmit={handleCreateTrip}>
        <label htmlFor="name">Nome</label>
        <input value={name} onChange={ChangeName} />
        <label htmlFor="planet">Planeta</label>
        <select name="planetsChoices" onChange={ChangePlanet}>
          <option value={''}>Escolha um planeta</option>
          {planets.map((planet) => (
            <option value={planet} key={planet}>
              {planet}
            </option>
          ))}
        </select>
        <label htmlFor="date">Data</label>
        <input value={date} onChange={ChangeDate} type="date" />
        <label htmlFor="description">Descrição</label>
        <input value={description} onChange={ChangeDescription} />
        <label htmlFor="duration">Duração</label>
        <input value={durationInDay} onChange={ChangeDuration} />
        <button>Cadastrar</button>
      </form>
    </>
  );
};

export default CreateTrips;
