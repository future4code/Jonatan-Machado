import { Request, Response } from 'express';
import { connection } from '../../knexfile';

class ListTask {
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const task = await connection('task').where('id', id).first();

    if (!task) {
      return response.status(400).json({ message: 'Task not found' });
    }

    return response.json(task);
  }
}

export default ListTask;
