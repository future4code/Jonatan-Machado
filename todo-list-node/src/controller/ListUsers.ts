import { Request, Response } from 'express';
import { connection } from '../knexfile';

interface user {
  id: string;
  name: string;
  nickname: string;
  email: string;
}

class ListUser {
  async index(request: Request, response: Response) {
    const users = await connection('user').select('*');
    return response.json(users);
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const users = await connection('user').where('id', id).first();

    if (!users) {
      return response.status(400).json({ message: 'User not found' });
    }

    return response.json(users);
  }
}

export default ListUser;
