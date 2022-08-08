import jwt from 'jsonwebtoken';
import { Login, User } from '../interfaces';

export default function createToken(payload: User | Login) {
  const SECRET = 'takemeback';
  const token = jwt.sign(payload, SECRET, { expiresIn: '7d' });

  return token;
}