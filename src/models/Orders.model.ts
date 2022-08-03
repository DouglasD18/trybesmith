import connection from './connection';
import { Order } from '../interfaces';

export default async function getAllOrders(): Promise<Order[]> {
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