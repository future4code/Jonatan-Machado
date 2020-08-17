import { Request, Response } from 'express';
import { connection } from '../knexfile';

import { uuid } from 'uuidv4';

class CreateTask {
  async create(request: Request, response: Response) {
    const { title, description, limitDate, creatorUserId } = request.body;
    const userId = uuid();

    if (title && description && limitDate && creatorUserId) {
      const date = limitDate.split('/').reverse().join('-');
      await connection('task').insert({
        id: userId,
        title: title,
        description: description,
        dateLimit: date,
        creatorId: creatorUserId,
      });
      response.status(201).json({ message: 'Successfully created task!' });
    } else {
      response.status(400).json({ message: 'Error, all fields are required!' });
    }
  }
}

export default CreateTask;
