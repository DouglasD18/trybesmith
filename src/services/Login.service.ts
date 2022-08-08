import { Login } from '../interfaces';
import login from '../models/Login.model';
import { createToken } from './token.service';

function validateUser(user: Login) {
  const { username, password } = user;

  if (!username) return { code: 400, message: '"username" is required' };
  if (!password) return { code: 400, message: '"password" is required' };
}

export default async function loginService(user: Login) {
  const isValid = validateUser(user);
  if (isValid?.code) {
    const { code, message } = isValid;
    return { code, message };
  }

  const exists = await login(user);
  if (!exists) return { code: 401, message: 'Username or password invalid' };

  const { id, username } = exists;
  const payload = { id, username };

  const token = createToken(payload);
  return { code: 200, token };
}