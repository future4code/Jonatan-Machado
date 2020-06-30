import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  getByLabelText,
} from '@testing-library/react';
import App from './App';

const createTask = () => {
  const task = render(<App />);

  const buttonAdd = task.getByText(/adicionar/i);
  const inputTask = task.getByPlaceholderText(/novo post/i);

  fireEvent.change(inputTask, { target: { value: 'hello' } });
  fireEvent.click(buttonAdd);

  return task;
};

test('I hope that when you register hello it will appear in the tasks', () => {
  const { getByText } = createTask();

  const newTask = getByText(/hello/i);

  expect(newTask).toHaveTextContent(/hello/i);
});

test('check button like and dislike', () => {
  const { getByText } = createTask();

  const buttonLike = getByText(/curtir/i);

  fireEvent.click(buttonLike);

  const buttonDislike = getByText(/descurtir/i);

  expect(buttonDislike).toHaveTextContent(/descurtir/i);
});

test('I hope that when you delete the task it will disappear', () => {
  const { getByText, queryByText } = createTask();

  const buttonDelete = getByText(/apagar/i);

  fireEvent.click(buttonDelete);

  const checkTask = queryByText(/hello/i);

  expect(checkTask).toEqual(null);
});

test('clear input after add a task', () => {
  const { getByPlaceholderText } = createTask();

  const inputTask = getByPlaceholderText(/novo post/i).value;

  expect(inputTask).toEqual('');
});
