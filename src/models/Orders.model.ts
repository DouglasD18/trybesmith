import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Order, User } from '../interfaces';

export async function getAllOrders(): Promise<Order[]> {
  const sql = `SELECT
  orders.id, orders.userId, JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.Orders AS orders
  INNER JOIN Trybesmith.Products AS products
  ON products.orderId = orders.id
  GROUP BY orders.id
  ORDER BY orders.userId`;

  const [orders] = await connection.execute(sql);
  return orders as Order[];
}

export async function create(user: User, productsIds: number[]): Promise<Order> {
  const { id } = user;

  await Promise.all(productsIds.map(async (ids) => {
    const sql = 'INSERT INTO Trybesmith.Orders userId VALUES (?)';
    const [order] = await connection.execute<ResultSetHeader>(sql, [id]);
    const { insertId } = order;

    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ? ';
    await connection.execute<ResultSetHeader>(query, [insertId, ids]);
  }));

  const order = { userId: id, productsIds };
  return order;
}