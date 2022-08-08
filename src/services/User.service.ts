import { User } from '../interfaces';
import createUser from '../models/User.model';
import createToken from './token.service';

export default async function createUserService(user: User) {
  const payload = await createUser(user);
  
  const token = createToken(payload);
  return { code: 201, token };
}