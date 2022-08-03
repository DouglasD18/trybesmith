import { Request, Response } from 'express';
import { Product } from '../interfaces';
import * as ProductService from '../services/Product.service';

export async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;

  const { code, result } = await ProductService.createProduct(product);
  res.status(code).json(result);
}