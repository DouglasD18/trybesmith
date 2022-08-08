import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces';

export async function getUserByName(username: string): Promise<User> {
  const sql = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const result = await connection.execute(sql, username);
  
  const [rows] = result;
  const [user] = rows as User[];
  return user;
}

export async function createUser(user: User): Promise<User> {
  const { username, classe, level, password } = user;

  const sql = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(sql, values);
  const { insertId: id } = result;

  const newUser: User = {
    id,
    username,
    classe,
    level,
    password,
  };
  return newUser;
}