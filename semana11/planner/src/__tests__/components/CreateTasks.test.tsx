import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import CreateTask from '../../components/CreateTasks';

const createTask = (text: string, day: string) => {
  const utils = render(<CreateTask />);
  const input = utils.getByPlaceholderText(/atividade/i);
  const select = utils.getByLabelText(/dia/i);
  const button = utils.getByText(/Cadastrar/i);

  userEvent.type(input, text);
  // userEvent.selectOptions(select, utils.getByLabelText(day).value);
  userEvent.click(button);

  return utils;
};

describe('CreateTask Component', () => {
  it('Should create a task Monday', async () => {
    const utils = createTask('segunda', 'monday');

    const task = await utils.findByText(/segunda/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Tuesday', async () => {
    const utils = createTask('terça', 'tuesday');

    const task = await utils.findByText(/terça/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Wednesday', async () => {
    const utils = createTask('quarta', 'wednesday');

    const task = await utils.findByText(/quarta/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Thursday', async () => {
    const utils = createTask('quinta', 'thursday');

    const task = await utils.findByText(/quinta/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Fryday', async () => {
    const utils = createTask('sexta', 'friday');

    const task = await utils.findByText(/sexta/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Saturday', async () => {
    const utils = createTask('sabado', 'saturday');

    const task = await utils.findByText(/sabado/);
    expect(task).toBeInTheDocument();
  });

  it('Should create a task Sunday', async () => {
    const utils = createTask('domingo', 'sunday');

    const task = await utils.findByText(/domingo/);
    expect(task).toBeInTheDocument();
  });
});
