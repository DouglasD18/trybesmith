import { Router } from 'express';
import createUser from '../controllers/User.controller';
import userMiddleware from '../middleware/User.middleware';

const UserRouter = Router();

UserRouter.use(userMiddleware);

UserRouter.post('/', createUser);

export default UserRouter;
