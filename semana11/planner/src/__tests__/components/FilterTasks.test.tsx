import React from 'react';
import { render, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterTasks from '../../components/FilterTasks';

describe('Filter Component', () => {
  it('Should delete a task Monday', async () => {
    const utils = render(<FilterTasks />);

    const task = await utils.findAllByText(/segunda/);
    const button = utils.getByText(/Deletar/i);
    userEvent.click(button);
    await wait(() => {
      expect(utils.queryAllByText('segunda')).toBeNull();
    });
  });
});
