import { Product } from '../interfaces';
import * as ProductModel from '../models/Product.model';

export async function createProduct(product: Product) {
  const result = await ProductModel.createProduct(product);
  return { code: 201, result };
}
