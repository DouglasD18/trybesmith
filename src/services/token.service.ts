import jwt from 'jsonwebtoken';
import { Login, User } from '../interfaces';

export function createToken(payload: User | Login) {
  const SECRET = 'takemeback';
  const token = jwt.sign(payload, SECRET, { expiresIn: '7d' });

  return token;
}

export function tokenValidate(token: string) {
  const SECRET = 'takemeback';

  const payload = jwt.verify(token, SECRET);

  return payload;
}
