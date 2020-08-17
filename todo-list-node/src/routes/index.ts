import { Router } from 'express';
import userRouter from './users.routes';
import taskRouter from './tasks.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/task', taskRouter);

export default routes;
