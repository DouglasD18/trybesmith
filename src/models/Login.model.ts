import connection from './connection';
import { Login, User } from '../interfaces';

export default async function login(user: Login): Promise<User | null> {
  const { username, password } = user;

  const sql = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const values = [username, password];

  const [result] = await connection.execute(sql, values);
  const [exists] = result as User[];

  return exists || null;
}