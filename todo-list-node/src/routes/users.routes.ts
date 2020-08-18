import { Router } from 'express';

import UserRepository from '../controller/UserRepository';
import ListUser from '../controller/ListUsers';
import EditUser from '../controller/EditUser';

const userRouter = Router();
const userRepository = new UserRepository();
const listUser = new ListUser();
const editUser = new EditUser();

userRouter.post('/', (request, response) => {
  const { name, nickname, email } = request.body;

  const nameEmailEmpty = userRepository.checkNameAndEmail(
    name,
    nickname,
    email,
  );

  if (nameEmailEmpty === null) {
    return response.status(400).json({ message: 'Error, name or email empty' });
  }

  const user = userRepository.create(name, nickname, email);

  return response.json(user);
});

userRouter.get('/', listUser.index);
userRouter.get('/:id', listUser.show);
userRouter.put('/edit/:id', editUser.edit);
userRouter.put('/edit/:id', editUser.edit);

export default userRouter;
