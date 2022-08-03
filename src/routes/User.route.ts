import { Router } from 'express';
import createUser from '../controllers/User.controller';

const UserRouter = Router();

UserRouter.post('/', createUser);

export default UserRouter;
