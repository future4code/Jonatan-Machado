import { Request, Response } from 'express';
import { connection } from '../knexfile';

class EditUser {
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const { name, nickname } = request.body;
    const user = await connection('user').where('id', id).first();

    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }
    if (!name) {
      await connection('user').update('nickname', nickname).where('id', id);
      return response.json({ message: 'Nickname changed' });
    }
    if (!nickname) {
      await connection('user').update('name', name).where('id', id);
      return response.json({ message: 'Name changed' });
    } else {
      await connection('user')
        .update({ name: name, nickname: nickname })
        .where('id', id);
      return response.json({ message: 'Name and Nickname changed' });
    }
  }
}

export default EditUser;
