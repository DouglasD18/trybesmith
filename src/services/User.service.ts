import jwt from 'jsonwebtoken';
import { User } from '../interfaces';
import createUser from '../models/User.model';

export default async function createUserService(user: User) {
  const payload = await createUser(user);
  const SECRET = 'takemeback';

  const token = jwt.sign(payload, SECRET, { expiresIn: '7d' });

  return { code: 201, token };
}