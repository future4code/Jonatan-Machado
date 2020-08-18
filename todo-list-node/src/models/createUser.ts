import { connection } from '../knexfile';
import { uuid } from 'uuidv4';

class UserCreate {
  id: string;
  name: string;
  nickname: string;
  email: string;

  constructor(name: string, nickname: string, email: string) {
    this.id = uuid();
    this.name = name;
    this.nickname = nickname;
    this.email = email;
  }

  async create(name: string, nickname: string, email: string): Promise<any> {
    const id: string = uuid();
    const result = await connection('user').insert({
      id,
      name,
      nickname,
      email,
    });
    return result;
  }
}

export default UserCreate;
