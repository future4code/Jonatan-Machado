import { Router } from 'express';

import CreateTask from '../controller/CreateTask';
import ListTask from '../controller/Tasks/ListTask';

const taskRouter = Router();

const task = new CreateTask();
const list = new ListTask();

taskRouter.post('/', task.create);
taskRouter.get('/:id', list.show);

export default taskRouter;
