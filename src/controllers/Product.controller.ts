import { Request, Response } from 'express';
import { Product } from '../interfaces';
import * as ProductService from '../services/Product.service';

export async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;

  const { code, result } = await ProductService.createProduct(product);
  res.status(code).json(result);
}

export async function getAllProducts(_req: Request, res: Response) {
  const result = await ProductService.getAllProducts();

  if (result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }
  return res.status(result.code).json(result.result);
}