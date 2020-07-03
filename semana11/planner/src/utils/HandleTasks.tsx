import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function ListTask() {
  const [task, setTask] = useState([]);
  useEffect(() => {
    api.get('planner-mello-jonatan-machado').then((response) => {
      setTask(response.data);
    });
  }, []);

  return task;
}

export function CreateTask(day: string, text: string) {
  interface body {
    text: string;
    day: string;
  }

  const body: body = {
    text: text,
    day: day,
  };

  try {
    api.post('planner-mello-jonatan-machado', body);
    return console.log('feito');
  } catch (error) {
    return console.log('deu ruim');
  }
}

export function DeleteTask(id: string) {
  api
    .delete(`planner-mello-jonatan-machado/${id}`)
    .then((response) => {
      window.location.reload();
      return console.log('ok');
    })
    .catch((e) => {
      return console.log('deu ruim');
    });
}

export function EditTask(id: string, text: string, day: string) {
  const [task, setTask] = useState([]);

  interface body {
    text: string;
    day: string;
  }

  const body: body = {
    text: text,
    day: day,
  };

  useEffect(() => {
    api
      .put(`planner-mello-jonatan-machado/${id}`, body)
      .then((response) => {
        setTask(response.data);
      })
      .catch((e) => {
        console.log('deu ruim!');
      });
  }, []);
  return task;
}
