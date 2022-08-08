import { Request, Response } from 'express';
import { createOrder, getAllOrdersService } from '../services/Orders.service';

export async function getAllOrders(_req: Request, res: Response) {
  const { code, result } = await getAllOrdersService();
  res.status(code).json(result);
}

export async function create(req: Request, res: Response) {
  const { user, productsIds } = req.body;

  const result = await createOrder(user.data, productsIds);
  const { code, userId } = result;

  return res.status(code).json({ userId, productsIds });
}