import { Request, Response } from 'express';
import getAllOrdersService from '../services/Orders.service';

export default async function getAllOrders(_req: Request, res: Response) {
  const { code, result } = await getAllOrdersService();
  res.status(code).json(result);
}