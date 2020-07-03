import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { CreateTask, ListTask } from '../../utils/HandleTasks';
import { Days } from '../../utils/DaysWeeks';

const CreateTasks: React.FC = () => {
  const [day, setDay] = useState('');
  const [activity, setActivity] = useState('');

  function changeDay(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(day);
    setDay(e.target.value);
  }

  function changeActivity(e: React.ChangeEvent<HTMLInputElement>) {
    setActivity(e.target.value);
  }

  async function HandleTasks(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    await CreateTask(day, activity);
    setDay('');
  }

  return (
    <>
      <form onSubmit={HandleTasks}>
        <label htmlFor="activity">Atividade</label>
        <input
          type="text"
          name="activity"
          value={activity}
          onChange={changeActivity}
          placeholder="Atividade"
        />
        <label htmlFor="day">Dia</label>
        <select id="day" onChange={changeDay}>
          <option value="">ESCOLHA UMA DIA DA SEMANA</option>
          {Days.map((day) => (
            <option value={day}>{day}</option>
          ))}
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};

export default CreateTasks;
