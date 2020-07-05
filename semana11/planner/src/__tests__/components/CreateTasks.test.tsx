import React from 'react';
import { render, wait, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Task from '../../components/Tasks';
import { api } from '../../services/api';

afterEach(cleanup);

describe('Initial Rendering', () => {
  it('Should input exist', () => {
    const { getByPlaceholderText } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    expect(input).toBeInTheDocument();
  });

  it('Should select exist', () => {
    const { getByLabelText } = render(<Task />);
    expect(getByLabelText(/dia/i)).toHaveValue('');
  });

  it('Should button exist', () => {
    const { getByText } = render(<Task />);

    expect(getByText(/cadastrar/i)).toBeInTheDocument();
  });
});

describe('Create a task', () => {
  it('Create a task in the Monday', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'parkout',
      },
    });

    expect(input).toHaveValue('parkout');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('segunda').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'parkout',
      day: 'segunda',
    });

    await wait(() => expect(getByText(/parkout/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Tuesday', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'corrida',
      },
    });

    expect(input).toHaveValue('corrida');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('terça').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'corrida',
      day: 'terca',
    });
    await wait(() => expect(getByText(/corrida/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Wednesday ', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'bungee jump',
      },
    });

    expect(input).toHaveValue('bungee jump');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('quarta').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'bungee jump',
      day: 'quarta',
    });
    await wait(() => expect(getByText(/bungee jump/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Quinta ', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'surf',
      },
    });

    expect(input).toHaveValue('surf');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('quinta').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'surf',
      day: 'quinta',
    });
    await wait(() => expect(getByText(/surf/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Friday', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'escalada',
      },
    });

    expect(input).toHaveValue('escalada');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('sexta').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'escalada',
      day: 'sexta',
    });
    await wait(() => expect(getByText(/escalada/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Saturday ', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'surf',
      },
    });

    expect(input).toHaveValue('surf');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('sábado').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'surf',
      day: 'sabado',
    });
    await wait(() => expect(getByText(/surf/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });

  it('Create a task in the Sunday ', async () => {
    api.post = jest.fn().mockResolvedValue();

    const {
      getByPlaceholderText,
      getByText,
      getByLabelText,
      queryByText,
    } = render(<Task />);

    const input = getByPlaceholderText(/atividade/i);

    fireEvent.change(input, {
      target: {
        value: 'escalada',
      },
    });

    expect(input).toHaveValue('escalada');

    const select = getByLabelText(/Dia/i);
    userEvent.selectOptions(select, queryByText('domingo').value);
    const button = getByText(/cadastrar/i);
    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith('planner-mello-jonatan-machado', {
      text: 'escalada',
      day: 'domingo',
    });
    await wait(() => expect(getByText(/escalada/i)).toBeInTheDocument());
    await wait(() => expect(input).toHaveValue(''));
  });
});

describe('Remove a task', () => {
  it('Remove task in the Monday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/segunda/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the Tuesday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/terça/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the Wednesday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/quarta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the Thursday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/quinta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the friday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/sexta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the Saturday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/sábado/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).toBeNull();
    });
  });

  it('Remove task in the Sunday', async () => {
    const utils = render(<Task />);

    const task = await utils.findByText(/domingo/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText('delete')).tdoBeNull();
    });
  });
});
