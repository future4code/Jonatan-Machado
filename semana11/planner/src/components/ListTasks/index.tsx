import React, { useState, useEffect } from 'react';
import { ListTask } from '../../utils/HandleTasks';
import FilterTasks from '../FilterTasks';
// import { Container } from './styles';

const ListTasks: React.FC = () => {
  const [task, setTask] = useState([]);

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

  return (
    <div>
      <FilterTasks />
    </div>
  );
};

export default ListTasks;
