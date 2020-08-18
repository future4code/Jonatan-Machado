import createUser from '../models/createUser';

class UserRepository {
  checkNameAndEmail(name: string, nickname: string, email: string) {
    if (name === '' || nickname === '' || email === '') {
      return null;
    }
  }

  checkId(id: string) {
    if (id === '') {
      return null;
    }
  }

  create(name: string, nickname: string, email: string) {
    const user = new createUser(name, nickname, email);

    user.create(name, nickname, email);

    return user;
  }
}

export default UserRepository;
