import React, { useState } from 'react';
import { ListTask, DeleteTask } from '../../utils/HandleTasks';

// import { Container } from './styles';

const FilterTasks: React.FC = () => {
  const [task, setTask] = useState([]);

  let monday: string[] = [];
  let tuesday: string[] = [];
  let wednesday: string[] = [];
  let thursday: string[] = [];
  let friday: string[] = [];
  let saturday: string[] = [];
  let sunday: string[] = [];

  loadTask();

  async function loadTask() {
    const datas = await ListTask();
    setTask(datas);
  }

  interface task {
    day: string;
    text: string;
    id: string;
  }

  async function handleDelete(id: string) {
    console.log(id);
    const idTask = id;
    try {
      DeleteTask(idTask);
    } catch (error) {
      console.log('deu ruim');
    }
  }

  task.forEach((task: any) => {
    switch (task.day) {
      case 'segunda':
        monday.push(task);
        break;
      case 'terça':
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
      default:
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
        {renderedSat.length !== 0 ? <div>{renderedSat}</div> : <div />}
      </div>
      <div>
        <h1>Domingo</h1>
        {renderedSun.length !== 0 ? <ul>{renderedSun}</ul> : <div />}
      </div>
    </>
  );
};

export default FilterTasks;
