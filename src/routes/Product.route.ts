import { Router } from 'express';
import * as ProductController from '../controllers/Product.controller';

const ProductRouter = Router();

ProductRouter.post('/', ProductController.createProduct);

export default ProductRouter;
