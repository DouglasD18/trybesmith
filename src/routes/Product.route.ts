import { Router } from 'express';
import * as ProductController from '../controllers/Product.controller';
import productMiddleware from '../middleware/Product.middleware';

const ProductRouter = Router();

ProductRouter.get('/', ProductController.getAllProducts);

ProductRouter.use(productMiddleware);

ProductRouter.post('/', ProductController.createProduct);

export default ProductRouter;
