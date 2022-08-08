import { Router } from 'express';
import login from '../controllers/Login.controller';

const LoginRouter = Router();

LoginRouter.post('/', login);

export default LoginRouter;
