import { Request, Response } from 'express';
import loginService from '../services/Login.service';

export default async function login(req: Request, res: Response) {
  const user = req.body;

  const result = await loginService(user);
  if (result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  const { code, token } = result;
  return res.status(code).json({ token });
}