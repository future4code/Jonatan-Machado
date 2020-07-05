import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { Days } from '../../utils/DaysWeeks';

const Tasks: React.FC = () => {
  const [days, setDays] = useState('');
  const [activity, setActivity] = useState('');
  const [task, setTask] = useState([]);

  useEffect(() => {
    api
      .get('planner-mello-jonatan-machado')
      .then((response: any) => {
        setTask(response.data);
        console.log('foi');
      })
      .catch((err) => {
        console.log('deu ruim!');
      });
  }, []);

  function changeDay(e: React.ChangeEvent<HTMLSelectElement>) {
    setDays(e.target.value);
  }

  function changeActivity(e: React.ChangeEvent<HTMLInputElement>) {
    setActivity(e.target.value);
  }

  interface body {
    text: string;
    day: string;
  }

  async function HandleTasks(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = activity;
    const day = days;

    const body: any = {
      text: text,
      day: day,
    };
    const data: any = [...task, body];
    if (text === '' || day === '') {
      console.log('erro');
    } else {
      try {
        api.post('planner-mello-jonatan-machado', body);
        console.log(body);
        //setTask(body)
      } catch (error) {
        console.log('deu ruim');
      }
      setTask(data);
      setActivity('');
    }
  }

  let monday: string[] = [];
  let tuesday: string[] = [];
  let wednesday: string[] = [];
  let thursday: string[] = [];
  let friday: string[] = [];
  let saturday: string[] = [];
  let sunday: string[] = [];

  interface task {
    day: string;
    text: string;
    id: string;
  }
  async function handleDelete(id: string) {
    try {
      await api.delete(`planner-mello-jonatan-machado/${id}`);
      const item = task.findIndex((p: { id: string }) => p.id === id);
      if (item !== -1) {
        setTask(task.splice(item, 1));
      }
      setTask([...task]);
    } catch (e) {
      console.log('é deu ruim');
    }
  }

  task.forEach((task: any) => {
    switch (task.day) {
      case 'segunda':
        monday.push(task);
        break;
      case 'terca':
        tuesday.push(task);
        break;
      case 'quarta':
        wednesday.push(task);
        break;
      case 'quinta':
        thursday.push(task);
        break;
      case 'sexta':
        friday.push(task);
        break;
      case 'sabado':
        saturday.push(task);
        break;
      case 'domingo':
        sunday.push(task);
        break;
    }
  });

  const renderTasks = (array: string[]) =>
    array.map((item: any) => (
      <div key={item.id}>
        {item.text}
        <button onClick={() => handleDelete(item.id)}>Deletar</button>
      </div>
    ));

  const renderedMon = renderTasks(monday);
  const renderedTue = renderTasks(tuesday);
  const renderedWed = renderTasks(wednesday);
  const renderedThu = renderTasks(thursday);
  const renderedFri = renderTasks(friday);
  const renderedSat = renderTasks(saturday);
  const renderedSun = renderTasks(sunday);

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
        <label htmlFor="day">dia</label>
        <select id="day" onChange={changeDay}>
          <option value="">Escolha uma opção</option>
          <option value="segunda">segunda</option>
          <option value="terca">terça</option>
          <option value="quarta">quarta</option>
          <option value="quinta">quinta</option>
          <option value="sexta">sexta</option>
          <option value="sabado">sábado</option>
          <option value="domingo">domingo</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <h1>Segunda</h1>
        {renderedMon.length !== 0 ? <ul>{renderedMon}</ul> : <div />}
      </div>
      <div>
        <h1>Terça</h1>
        {renderedTue.length !== 0 ? <ul>{renderedTue}</ul> : <div />}
      </div>
      <div>
        <h1>Quarta</h1>
        {renderedWed.length !== 0 ? <ul>{renderedWed}</ul> : <div />}
      </div>
      <div>
        <h1>Quinta</h1>
        {renderedThu.length !== 0 ? <ul>{renderedThu}</ul> : <div />}
      </div>
      <div>
        <h1>Sexta</h1>
        {renderedFri.length !== 0 ? <ul>{renderedFri}</ul> : <div />}
      </div>
      <div>
        <h1>Sabado</h1>
        {renderedSat.length !== 0 ? <ul>{renderedSat}</ul> : <div />}
      </div>
      <div>
        <h1>Domingo</h1>
        {renderedSun.length !== 0 ? <ul>{renderedSun}</ul> : <div />}
      </div>
    </>
  );
};

export default Tasks;
