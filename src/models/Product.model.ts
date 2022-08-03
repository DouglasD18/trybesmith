import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces';

export async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;
  
  const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(sql, values);
  const { insertId: id } = result;

  const newProduct: Product = {
    id,
    name,
    amount,
  };
  return newProduct;
}

export async function getAllProducts(): Promise<Product[]> {
  const sql = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(sql);
  return products as Product[];
}
