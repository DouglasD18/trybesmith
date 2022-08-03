import { Request, Response } from 'express';
import { User } from '../interfaces';
import createUserService from '../services/User.service';

export default async function createUser(req: Request, res: Response) {
  const user = req.body as User;

  const { code, token } = await createUserService(user);

  res.status(code).json({ token });
}
