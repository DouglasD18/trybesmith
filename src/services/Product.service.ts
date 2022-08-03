import { Product } from '../interfaces';
import * as ProductModel from '../models/Product.model';

export async function createProduct(product: Product) {
  const result = await ProductModel.createProduct(product);
  return { code: 201, result };
}

export async function getAllProducts() {
  const result = await ProductModel.getAllProducts();

  if (!result) return { code: 404, message: 'Product Not Found' };
  return { code: 200, result };
}